'use client'

import { useState } from 'react'
import { useGlobalLanguage } from '@/lib/useGlobalLanguage'
import { Language } from '@/lib/translations'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage, t, mounted } = useGlobalLanguage()

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'tg', name: 'Тоҷикӣ', flag: '🇹🇯' },
  ]

  if (!mounted) return null

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <span style={styles.logoText}>DAV-TJ</span>
          <span style={styles.logoSubtext}>Running</span>
        </div>

        <div style={styles.rightSection}>
          {/* Language Selector */}
          <div style={styles.languageSelector}>
            <button
              style={styles.langButton}
              onClick={() => setLangOpen(!langOpen)}
            >
              {languages.find(l => l.code === language)?.flag} {language.toUpperCase()}
            </button>
            {langOpen && (
              <div style={styles.langDropdown}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    style={{
                      ...styles.langOption,
                      background: language === lang.code ? 'rgba(252, 76, 2, 0.2)' : 'transparent',
                    }}
                    onClick={() => {
                      setLanguage(lang.code)
                      setLangOpen(false)
                    }}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            style={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav style={{ ...styles.nav, display: menuOpen ? 'flex' : 'none' }}>
          <a href="#home" style={styles.navLink} onClick={() => setMenuOpen(false)}>
            {t('home')}
          </a>
          <a href="#about" style={styles.navLink} onClick={() => setMenuOpen(false)}>
            {t('about')}
          </a>
          <a href="#features" style={styles.navLink} onClick={() => setMenuOpen(false)}>
            {t('features')}
          </a>
          <a href="#contact" style={styles.navLink} onClick={() => setMenuOpen(false)}>
            {t('contact')}
          </a>
          <button style={styles.signUpBtn}>{t('joinNow')}</button>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    background: 'rgba(10, 22, 40, 0.98)',
    backdropFilter: 'blur(10px)',
    padding: '15px 20px',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(252, 76, 2, 0.2)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap' as const,
  },
  logo: {
    display: 'flex',
    flexDirection: 'column' as const,
    cursor: 'pointer',
    minWidth: 'fit-content',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#FC4C02',
  },
  logoSubtext: {
    fontSize: '0.7rem',
    color: '#b0b0b0',
    marginTop: '-2px',
  },
  rightSection: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  languageSelector: {
    position: 'relative' as const,
  },
  langButton: {
    background: 'rgba(252, 76, 2, 0.1)',
    color: '#FC4C02',
    border: '1px solid rgba(252, 76, 2, 0.3)',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap' as const,
  },
  langDropdown: {
    position: 'absolute' as const,
    top: '100%',
    right: 0,
    background: 'rgba(10, 22, 40, 0.98)',
    border: '1px solid rgba(252, 76, 2, 0.3)',
    borderRadius: '6px',
    marginTop: '5px',
    minWidth: '150px',
    zIndex: 1001,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  langOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px 15px',
    border: 'none',
    background: 'transparent',
    color: '#b0b0b0',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    textAlign: 'left' as const,
  },
  menuToggle: {
    background: 'transparent',
    color: '#FC4C02',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    width: '100%',
    order: 3,
    flexDirection: 'column' as const,
  },
  navLink: {
    color: '#b0b0b0',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  signUpBtn: {
    background: '#FC4C02',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
}

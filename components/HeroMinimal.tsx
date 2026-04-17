'use client'

import { useGlobalLanguage } from '@/lib/useGlobalLanguage'

export default function HeroMinimal() {
  const { t, mounted } = useGlobalLanguage()

  if (!mounted) return null

  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>{t('heroTitle')}</h1>
          <p style={styles.subtitle}>{t('heroSubtitle')}</p>
          <div style={styles.ctaButtons}>
            <button style={styles.btnPrimary}>{t('getStarted')}</button>
            <button style={styles.btnSecondary}>{t('learnMore')}</button>
          </div>
          <div style={styles.statsRow}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>600+</div>
              <div style={styles.statLabel}>{t('runners')}</div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>150K</div>
              <div style={styles.statLabel}>{t('kmPerYear')}</div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>12+</div>
              <div style={styles.statLabel}>{t('countries')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(135deg, #0a1628 0%, #162a47 50%, #1e3a5f 100%)`,
    padding: '40px 20px',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  content: {
    textAlign: 'center' as const,
  },
  title: {
    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2',
    color: '#ffffff',
    whiteSpace: 'pre-line' as const,
  },
  subtitle: {
    fontSize: 'clamp(1rem, 4vw, 1.3rem)',
    color: '#b0b0b0',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
  },
  ctaButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    marginBottom: '60px',
  },
  btnPrimary: {
    background: '#FC4C02',
    color: 'white',
    padding: 'clamp(12px, 2vw, 15px) clamp(30px, 5vw, 40px)',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#FC4C02',
    padding: 'clamp(12px, 2vw, 15px) clamp(30px, 5vw, 40px)',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #FC4C02',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap' as const,
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    minWidth: '80px',
  },
  statNumber: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: '700',
    color: '#FC4C02',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#b0b0b0',
    marginTop: '5px',
  },
  divider: {
    width: '1px',
    height: '40px',
    background: 'rgba(252, 76, 2, 0.3)',
  },
}

'use client'

import { useGlobalLanguage } from '@/lib/useGlobalLanguage'

export default function Footer() {
  const { t, mounted } = useGlobalLanguage()

  // Updated social media links
  const socialLinks = {
    strava: 'https://www.strava.com/clubs/davtj',
    instagram: 'https://www.instagram.com/dav.tajikistan',
    telegram: 'https://t.me/s/davtajikistan',
  }

  if (!mounted) return null

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>{t('navigation')}</h4>
            <ul style={styles.list}>
              <li><a href="#home" style={styles.link}>{t('home')}</a></li>
              <li><a href="#about" style={styles.link}>{t('about')}</a></li>
              <li><a href="#contact" style={styles.link}>{t('contact')}</a></li>
            </ul>
          </div>
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>{t('resources')}</h4>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>{t('blog')}</a></li>
              <li><a href="#" style={styles.link}>{t('trainingGuide')}</a></li>
              <li><a href="#" style={styles.link}>Events</a></li>
            </ul>
          </div>
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>{t('connect')}</h4>
            <ul style={styles.list}>
              <li>
                <a 
                  href={socialLinks.strava} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {t('strava')}
                </a>
              </li>
              <li>
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {t('instagram')}
                </a>
              </li>
              <li>
                <a 
                  href={socialLinks.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {t('telegram')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.bottom}>
          <p style={styles.copyright}>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'rgba(10, 22, 40, 0.8)',
    borderTop: '1px solid rgba(252, 76, 2, 0.1)',
    padding: '50px 20px 30px',
    color: '#b0b0b0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '30px',
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: '1px solid rgba(252, 76, 2, 0.1)',
  },
  section: {},
  sectionTitle: {
    color: '#FC4C02',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '15px',
  },
  list: {
    listStyle: 'none',
  },
  link: {
    color: '#b0b0b0',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
    display: 'inline-block',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  bottom: {
    textAlign: 'center' as const,
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#888',
  },
}

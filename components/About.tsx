'use client'

import { useGlobalLanguage } from '@/lib/useGlobalLanguage'

export default function About() {
  const { t, mounted } = useGlobalLanguage()

  if (!mounted) return null

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.textContent}>
            <h2 style={styles.title}>{t('aboutUs')}</h2>
            <p style={styles.description}>{t('aboutDescription')}</p>
            <div style={styles.stats}>
              <div style={styles.stat}>
                <div style={styles.statValue}>600+</div>
                <div style={styles.statLabel}>{t('happyRunners')}</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statValue}>150K+</div>
                <div style={styles.statLabel}>{t('totalDistance')}</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statValue}>12+</div>
                <div style={styles.statLabel}>{t('countries')}</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statValue}>100%</div>
                <div style={styles.statLabel}>{t('community')}</div>
              </div>
            </div>
          </div>
          <div style={styles.imageContent}>
            <div style={styles.imagePlaceholder}>
              🏃‍♂️🏃‍♀️🏃
              <p style={styles.imagePlaceholderText}>Running Event Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #162a47 0%, #1e3a5f 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '60px',
    alignItems: 'center',
  },
  textContent: {
    color: '#ffffff',
  },
  title: {
    fontSize: 'clamp(2rem, 6vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#ffffff',
  },
  description: {
    fontSize: '1rem',
    color: '#b0b0b0',
    marginBottom: '30px',
    lineHeight: '1.8',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '30px',
  },
  stat: {
    borderRight: '2px solid #FC4C02',
    paddingRight: '20px',
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#FC4C02',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#b0b0b0',
    marginTop: '5px',
  },
  imageContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '300px',
    background: 'rgba(252, 76, 2, 0.1)',
    border: '2px dashed #FC4C02',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    color: '#FC4C02',
  },
  imagePlaceholderText: {
    fontSize: '1rem',
    color: '#b0b0b0',
    marginTop: '15px',
  },
}

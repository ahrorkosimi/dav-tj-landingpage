'use client'

import { useGlobalLanguage } from '@/lib/useGlobalLanguage'

export default function FeaturesMinimal() {
  const { t, mounted } = useGlobalLanguage()

  const features = [
    {
      icon: '📊',
      titleKey: 'trackProgress',
      descKey: 'trackProgressDesc',
    },
    {
      icon: '👥',
      titleKey: 'community',
      descKey: 'communityDesc',
    },
    {
      icon: '🏆',
      titleKey: 'achievements',
      descKey: 'achievementsDesc',
    },
    {
      icon: '📅',
      titleKey: 'events',
      descKey: 'eventsDesc',
    },
    {
      icon: '🎯',
      titleKey: 'goals',
      descKey: 'goalsDesc',
    },
    {
      icon: '⚡',
      titleKey: 'performance',
      descKey: 'performanceDesc',
    },
  ]

  if (!mounted) return null

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t('whyJoin')}</h2>
        <div style={styles.grid}>
          {features.map((feat, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.icon}>{feat.icon}</div>
              <h3 style={styles.cardTitle}>{t(feat.titleKey)}</h3>
              <p style={styles.cardDesc}>{t(feat.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: 'clamp(40px, 10vw, 80px) 20px',
    background: '#0a1628',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '50px',
    textAlign: 'center' as const,
    color: '#ffffff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  card: {
    background: 'rgba(30, 58, 95, 0.5)',
    border: '1px solid rgba(252, 76, 2, 0.2)',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center' as const,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#ffffff',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: '#b0b0b0',
    lineHeight: '1.6',
  },
}

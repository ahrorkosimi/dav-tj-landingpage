'use client'

export default function GenderChart() {
  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Gender Distribution</h2>
        <div style={styles.chartContainer}>
          <div style={styles.chartWrapper}>
            <svg width="200" height="200" style={styles.svg}>
              <circle cx="100" cy="100" r="90" fill="#FC4C02" />
              <circle cx="100" cy="100" r="60" fill="white" />
              <text x="100" y="110" textAnchor="middle" style={styles.chartText}>
                70%
              </text>
            </svg>
            <p style={styles.chartLabel}>Men</p>
          </div>
          <div style={styles.chartWrapper}>
            <svg width="200" height="200" style={styles.svg}>
              <circle cx="100" cy="100" r="90" fill="#FFB3A0" />
              <circle cx="100" cy="100" r="60" fill="white" />
              <text x="100" y="110" textAnchor="middle" style={styles.chartText}>
                30%
              </text>
            </svg>
            <p style={styles.chartLabel}>Women</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  section: {
    padding: '40px 20px',
    background: 'white',
    borderBottom: '1px solid #eee',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#1a1a1a',
    textAlign: 'center' as const,
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    flexWrap: 'wrap' as const,
  },
  chartWrapper: {
    textAlign: 'center' as const,
  },
  svg: {
    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
  },
  chartText: {
    fontSize: '24px',
    fontWeight: 'bold',
    fill: '#333',
  },
  chartLabel: {
    marginTop: '15px',
    fontSize: '1.1rem',
    color: '#666',
  },
}

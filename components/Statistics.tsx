export default function Statistics() {
  const stats = [
    { label: 'Members', value: '600+' },
    { label: 'Countries', value: '12+' },
    { label: 'Yearly Distance', value: '150,000 km' },
    { label: 'Active Runners', value: '95%' },
  ]

  return (
    <div style={styles.statistics}>
      <div style={styles.container}>
        <h2 style={styles.title}>Club Statistics</h2>
        <div style={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.value}>{stat.value}</div>
              <div style={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  statistics: {
    padding: '40px 20px',
    background: '#f8f9fa',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center' as const,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  value: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FC4C02',
    marginBottom: '10px',
  },
  label: {
    fontSize: '1rem',
    color: '#666',
  },
}

export default function CountriesSection() {
  const countries = [
    'Tajikistan',
    'Uzbekistan',
    'Kazakhstan',
    'Russia',
    'Belgium',
    'United States',
    'Canada',
    'China',
    'India',
    'Switzerland',
    'Iran',
  ]

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Global Presence</h2>
        <p style={styles.subtitle}>Members from {countries.length}+ countries worldwide</p>
        <div style={styles.grid}>
          {countries.map((country, index) => (
            <div key={index} style={styles.countryCard}>
              <span style={styles.flag}>🌍</span>
              <p style={styles.countryName}>{country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  section: {
    padding: '40px 20px',
    background: '#f8f9fa',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#1a1a1a',
    textAlign: 'center' as const,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
  },
  countryCard: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center' as const,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  flag: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '10px',
  },
  countryName: {
    fontSize: '0.95rem',
    color: '#333',
    fontWeight: '500',
  },
}

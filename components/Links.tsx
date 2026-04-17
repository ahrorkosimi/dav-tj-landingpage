export default function Links() {
  const links = [
    { label: 'Strava Club', url: '#' },
    { label: 'Join Us', url: '#' },
    { label: 'Running Routes', url: '#' },
    { label: 'Events', url: '#' },
  ]

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Quick Links</h2>
        <div style={styles.linksGrid}>
          {links.map((link, index) => (
            <a key={index} href={link.url} style={styles.link}>
              {link.label}
            </a>
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
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
  },
  link: {
    background: 'white',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center' as const,
    color: '#FC4C02',
    fontWeight: '500',
    border: '2px solid #FC4C02',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
}

export default function Dashboard() {
  return (
    <div style={styles.dashboard}>
      <div style={styles.container}>
        <h2 style={styles.title}>Welcome to DAV-TJ</h2>
        <p style={styles.description}>
          A global community of runners united by passion, connected through Strava, 
          and motivated to achieve their running goals together.
        </p>
      </div>
    </div>
  )
}

const styles = {
  dashboard: {
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
    marginBottom: '15px',
    color: '#1a1a1a',
  },
  description: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6',
  },
}

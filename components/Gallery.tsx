export default function Gallery() {
  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Gallery</h2>
        <div style={styles.gallery}>
          <div style={styles.placeholder}>📸 Running Event Photos</div>
          <div style={styles.placeholder}>🏃 Member Highlights</div>
          <div style={styles.placeholder}>🌅 Morning Runs</div>
          <div style={styles.placeholder}>🏆 Race Results</div>
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
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  placeholder: {
    background: '#f0f0f0',
    padding: '40px 20px',
    borderRadius: '8px',
    textAlign: 'center' as const,
    color: '#999',
    fontSize: '1rem',
    border: '2px dashed #ddd',
  },
}

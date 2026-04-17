'use client'

import { useState, useEffect } from 'react'
import { useGlobalLanguage } from '@/lib/useGlobalLanguage'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t, mounted } = useGlobalLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  // Initialize EmailJS (one-time only)
  useEffect(() => {
    emailjs.init('DU9GxEj8z_sOjzqDT') // Public key - safe to expose
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: 'ahrorkosimi@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      }

      await emailjs.send(
        'service_dav_tj', // Service ID
        'template_dav_contact', // Template ID
        templateParams
      )

      setStatus('success')
      setStatusMessage('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setStatusMessage('Failed to send message. Please try again.')
      setTimeout(() => setStatus('idle'), 5000)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t('connectAndLearn')}</h2>
        <p style={styles.subtitle}>{t('contactDescription')}</p>
        <div style={styles.content}>
          <div style={styles.imageSection}>
            <div style={styles.imagePlaceholder}>
              👥👫👬👭
              <p style={styles.imagePlaceholderText}>Community Photo</p>
            </div>
          </div>
          <div style={styles.formSection}>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder={t('yourName')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder={t('yourEmail')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder={t('yourMessage')}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                />
              </div>
              
              {status === 'success' && (
                <div style={styles.successMessage}>
                  ✓ {statusMessage}
                </div>
              )}
              
              {status === 'error' && (
                <div style={styles.errorMessage}>
                  ✗ {statusMessage}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={loading}
                style={{...styles.submitBtn, opacity: loading ? 0.7 : 1}}
              >
                {loading ? 'Sending...' : t('sendMessage')}
              </button>
            </form>
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
  title: {
    fontSize: 'clamp(2rem, 6vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '20px',
    textAlign: 'center' as const,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#b0b0b0',
    textAlign: 'center' as const,
    marginBottom: '50px',
    maxWidth: '700px',
    margin: '0 auto 50px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '50px',
    alignItems: 'center',
  },
  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '350px',
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
  formSection: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  input: {
    padding: '12px 15px',
    background: 'rgba(30, 58, 95, 0.5)',
    border: '1px solid rgba(252, 76, 2, 0.3)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '12px 15px',
    background: 'rgba(30, 58, 95, 0.5)',
    border: '1px solid rgba(252, 76, 2, 0.3)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    resize: 'vertical' as const,
    transition: 'border-color 0.3s ease',
  },
  successMessage: {
    padding: '12px 15px',
    background: 'rgba(34, 197, 94, 0.2)',
    border: '1px solid rgba(34, 197, 94, 0.5)',
    borderRadius: '8px',
    color: '#86efac',
    fontSize: '0.95rem',
    textAlign: 'center' as const,
  },
  errorMessage: {
    padding: '12px 15px',
    background: 'rgba(239, 68, 68, 0.2)',
    border: '1px solid rgba(239, 68, 68, 0.5)',
    borderRadius: '8px',
    color: '#fca5a5',
    fontSize: '0.95rem',
    textAlign: 'center' as const,
  },
  submitBtn: {
    padding: '15px 40px',
    background: '#FC4C02',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
}

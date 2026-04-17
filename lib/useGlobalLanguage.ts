'use client'

import { useState, useEffect, useCallback } from 'react'
import { Language, translations } from './translations'

let globalLanguage: Language = 'en'
let listeners: (() => void)[] = []

export function useGlobalLanguage() {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Get initial language from localStorage
    const saved = localStorage.getItem('language') as Language | null
    if (saved && ['en', 'ru', 'tg'].includes(saved)) {
      globalLanguage = saved
      setLanguageState(saved)
    }

    // Subscribe to language changes
    const handleLanguageChange = () => {
      setLanguageState(globalLanguage)
    }

    listeners.push(handleLanguageChange)

    return () => {
      listeners = listeners.filter(l => l !== handleLanguageChange)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    globalLanguage = lang
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    
    // Notify all listeners
    listeners.forEach(listener => listener())
  }, [])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return { language, setLanguage, t, mounted }
}

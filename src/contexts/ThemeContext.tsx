import React, { createContext, useContext, useEffect } from 'react'
import { ColorTheme, bitcoinTheme } from '../types/theme'

interface ThemeContextType {
  currentTheme: ColorTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const applyThemeToCSS = (theme: ColorTheme) => {
    document.body.style.background = theme.background
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.color = theme.text
    
    // Update CSS custom properties
    document.documentElement.style.setProperty('--theme-background', theme.background)
    document.documentElement.style.setProperty('--theme-primary', theme.primary)
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary)
    document.documentElement.style.setProperty('--theme-accent', theme.accent)
    document.documentElement.style.setProperty('--theme-text', theme.text)
    document.documentElement.style.setProperty('--theme-card-bg', theme.cardBg)
  }

  useEffect(() => {
    // Always apply Bitcoin theme
    applyThemeToCSS(bitcoinTheme)
  }, [])

  const value = {
    currentTheme: bitcoinTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
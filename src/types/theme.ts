export interface ColorTheme {
  id: string
  name: string
  description: string
  preview: string
  background: string
  primary: string
  secondary: string
  accent: string
  text: string
  cardBg: string
}

export const bitcoinTheme: ColorTheme = {
  id: 'bitcoin-theme',
  name: 'Bitcoin',
  description: 'Bílé pozadí s Bitcoin žlutou',
  preview: '#f7931a',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
  primary: '#f7931a',
  secondary: '#ff9500',
  accent: '#f7931a',
  text: 'rgb(33 37 41)',
  cardBg: 'rgba(255, 255, 255, 0.95)'
}
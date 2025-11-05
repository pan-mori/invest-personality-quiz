import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import MainQuiz from './pages/MainQuiz'
import CryptoQuiz from './pages/CryptoQuiz'
import HomePage from './pages/HomePage'
import './styles/index.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personality-quiz" element={<MainQuiz />} />
          <Route path="/crypto-quiz" element={<CryptoQuiz />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
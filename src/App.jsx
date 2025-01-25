import { useState } from 'react'
import Home from './components/Home'
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="w-full">
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App

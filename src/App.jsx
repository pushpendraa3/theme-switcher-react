import React, { useState } from 'react'
import ThemeBtn from './components/ThemeBtn.jsx';
import Card from './components/Card.jsx';
import ThemeContext from './context/ThemeContext.js';

const App = () => {
  const [theme, setTheme] = useState("light")
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  )
}

export default App

import React from 'react'
import Navigation from './Navigation'
import ThemeContext from './ThemeContext'

function App() {
  return (
    <ThemeContext.Provider value={{variant: 'dark'}}>
      <Navigation />
    </ThemeContext.Provider>
  );
}

export default App

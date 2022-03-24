import React, { useState, useEffect } from 'react'

export default function UseDarkMode() {
const [darkMode, setDarkMode] = useState('dark');

const setMode = mode => {
  window.localStorage.setItem('darkMode', mode)
  setDarkMode(mode)
}

const _handleToggleTheme = () =>  {
  darkMode === 'dark' ? setMode('light') : setMode('dark')
}

useEffect(()=>{
  const localTheme = window.localStorage.getItem('darkMode'); 
  localTheme ? setDarkMode(localTheme) : setMode('dark');
}, [])


  return [darkMode, _handleToggleTheme]
}

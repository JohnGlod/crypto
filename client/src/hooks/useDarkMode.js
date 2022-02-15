import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const isDefaultTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDarkMode, setDarkMode] = useState(() => isDefaultTheme && localStorage.theme === 'dark' )

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  useEffect( ()=> {
    const html = window.document.documentElement;
    const prevTheme = isDarkMode ? 'light' : 'dark'
    html.classList.remove(prevTheme)
    const nextTheme = isDarkMode ? 'dark' : 'light'
    html.classList.add(nextTheme)
    localStorage.setItem('theme', nextTheme) 
  }, [isDarkMode])

  return [isDarkMode, toggleDarkMode]
}
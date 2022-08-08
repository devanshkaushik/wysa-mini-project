import { useEffect, useState } from "react"
import { ITheme, defaultThemes } from "./themes"
import { getFromLocalStorage, setToLocalStorage } from "../helpers/storage"

export const useTheme = () => {
  const [theme, setTheme] = useState(defaultThemes.default)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setActiveTheme = (newTheme: ITheme) => {
    setToLocalStorage("active-theme", newTheme)
    setTheme(newTheme)
  }

  const setCustomTheme = (newTheme: ITheme) => {
    setToLocalStorage("custom-theme", newTheme)
  }

  const getCustomTheme = () => {
    return getFromLocalStorage("custom-theme") as ITheme
  }

  useEffect(() => {
    const localTheme: ITheme = getFromLocalStorage("active-theme")

    if (!localTheme) {
      setTheme(defaultThemes.default)
      setToLocalStorage("active-theme", defaultThemes.default)
      setThemeLoaded(true)
      return
    }

    setTheme(localTheme)
    setThemeLoaded(true)
  }, [])

  return { theme, themeLoaded, setActiveTheme, setCustomTheme, getCustomTheme }
}

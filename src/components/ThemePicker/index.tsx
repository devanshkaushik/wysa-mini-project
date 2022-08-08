import React, { createRef, useCallback, useEffect, useState } from "react"
import { Picker, StyledThemePicker, Theme, ThemeColor } from "./styles"

import { getFromLocalStorage } from "../../helpers/storage"
import { ITheme, IThemes } from "../../themes/themes"
import { useTheme } from "../../themes/useTheme"

import { Icon } from "../Icon"
import CustomizeTheme from "./CustomizeTheme"

type Props = {
  themeSetter: (theme: ITheme) => void
}

const ThemePicker: React.FC<Props> = ({ themeSetter }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { setActiveTheme } = useTheme()

  const localThemes: IThemes = getFromLocalStorage("all-themes")
  const divRef = createRef<HTMLDivElement>()
  const activeTheme = getFromLocalStorage("active-theme")

  // Closing the theme picker on click outside
  const menuCloseHandler = useCallback(
    (e: MouseEvent) => {
      if (!divRef.current) return
      if (isOpen && !divRef.current.contains(e.target as HTMLDivElement))
        setIsOpen(false)
    },
    [divRef, isOpen]
  )

  useEffect(() => {
    window.addEventListener("click", menuCloseHandler)
    return () => {
      window.removeEventListener("click", menuCloseHandler)
    }
  }, [menuCloseHandler])

  return (
    <StyledThemePicker ref={divRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        Change Theme
        <Icon src="chevron-down.svg" color="white" size="10px" />
      </button>
      <Picker className={isOpen ? "visible" : ""}>
        <ul>
          {Object.values(localThemes).map((theme: ITheme) => {
            return (
              <Theme
                className={theme.id === activeTheme.id ? "active" : ""}
                onClick={() => {
                  setActiveTheme(theme)
                  themeSetter(theme)
                }}
              >
                <p>{theme.name}</p>
                <ThemeColor themeColor={theme.colors.background.first} />
                <ThemeColor themeColor={theme.colors.background.second} />
                <ThemeColor themeColor={theme.colors.primary} />
                <ThemeColor themeColor={theme.colors.secondary} />
              </Theme>
            )
          })}
          <CustomizeTheme
            themeSetter={themeSetter}
            isThemePickerOpen={isOpen}
          />
        </ul>
      </Picker>
    </StyledThemePicker>
  )
}

export default ThemePicker

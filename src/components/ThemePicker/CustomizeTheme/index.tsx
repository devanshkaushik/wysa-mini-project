import React, { createRef, useCallback, useEffect, useState } from "react"
import { getFromLocalStorage } from "../../../helpers/storage"
import { ITheme } from "../../../themes/themes"
import { Theme, ThemeColor } from "../styles"
import { ChromePicker, HSLColor } from "react-color"
import { StyledCustomizeTheme } from "./styles"
import { useTheme } from "../../../themes/useTheme"

type Props = {
  themeSetter: (theme: ITheme) => void
  isThemePickerOpen: boolean
}

const CustomizeTheme: React.FC<Props> = ({
  themeSetter,
  isThemePickerOpen,
}) => {
  const { getCustomTheme, setActiveTheme, setCustomTheme } = useTheme()
  const localCustomTheme = getCustomTheme()
  const activeTheme = getFromLocalStorage("active-theme")
  const divRef = createRef<HTMLDivElement>()

  const [theme, setTheme] = useState(localCustomTheme)
  const [activeColorPickerIndex, setActiveColorPickerIndex] = useState<
    number | null
  >(null)

  // Setting up state for all the four colors used
  const [colors, setColors] = useState<HSLColor[]>([
    localCustomTheme.colors.secondary,
    localCustomTheme.colors.primary,
    localCustomTheme.colors.background.second,
    localCustomTheme.colors.background.first,
  ])

  // Closing the color picker on click outside
  const colorPickerCloseHandler = useCallback(
    (e: MouseEvent) => {
      if (!divRef.current) return

      const isClickInside = divRef.current.contains(e.target as HTMLDivElement)
      if (activeColorPickerIndex === null || isClickInside) return

      setActiveColorPickerIndex(null)
    },
    [divRef, activeColorPickerIndex]
  )

  useEffect(() => {
    window.addEventListener("click", colorPickerCloseHandler)

    return () => {
      window.removeEventListener("click", colorPickerCloseHandler)
    }
  }, [colorPickerCloseHandler])

  // Changing the active and selected themes
  const themeChangeHandler = (theme: ITheme) => {
    themeSetter(theme)
    setActiveTheme(theme)
  }

  return (
    <StyledCustomizeTheme ref={divRef} index={activeColorPickerIndex || 0}>
      <Theme
        className={activeTheme.id === localCustomTheme.id ? "active" : ""}
        onClick={() => themeChangeHandler(theme)}
      >
        <p>{theme.name}</p>
        <ThemeColor
          className="square"
          themeColor={colors[3]}
          onClick={() =>
            setActiveColorPickerIndex((prev) => (prev !== 3 ? 3 : null))
          }
        />
        <ThemeColor
          className="square"
          themeColor={colors[2]}
          onClick={() =>
            setActiveColorPickerIndex((prev) => (prev !== 2 ? 2 : null))
          }
        />
        <ThemeColor
          className="square"
          themeColor={colors[1]}
          onClick={() =>
            setActiveColorPickerIndex((prev) => (prev !== 1 ? 1 : null))
          }
        />
        <ThemeColor
          className="square"
          themeColor={colors[0]}
          onClick={() =>
            setActiveColorPickerIndex((prev) => (prev !== 0 ? 0 : null))
          }
        />
        <ChromePicker
          className={`color-picker ${
            activeColorPickerIndex !== null && isThemePickerOpen
              ? "visible"
              : ""
          }`}
          color={colors[activeColorPickerIndex || 0]}
          onChange={(color) =>
            setColors((prev) =>
              prev.map((prevCol, index) =>
                index === activeColorPickerIndex ? color.hsl : prevCol
              )
            )
          }
          onChangeComplete={(color) => {
            const newTheme = {
              ...theme,
              colors: {
                background: {
                  first: activeColorPickerIndex === 3 ? color.hsl : colors[3],
                  second: activeColorPickerIndex === 2 ? color.hsl : colors[2],
                },
                primary: activeColorPickerIndex === 1 ? color.hsl : colors[1],
                secondary: activeColorPickerIndex === 0 ? color.hsl : colors[0],
              },
            }

            setTheme(newTheme)
            themeChangeHandler(newTheme)
            setCustomTheme(newTheme)
          }}
        />
      </Theme>
    </StyledCustomizeTheme>
  )
}

export default CustomizeTheme

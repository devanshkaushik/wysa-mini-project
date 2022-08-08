import React, { SyntheticEvent, useEffect, useState } from "react"
import { Nav, NavLinks, StyledApp } from "./styles"
import { ThemeProvider } from "styled-components"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"

import { getFromLocalStorage, setToLocalStorage } from "../../helpers/storage"

import { useTheme } from "../../themes/useTheme"
import { GlobalStyles } from "../../themes/gloabalStyles"
import { defaultThemes, ITheme } from "../../themes/themes"

import Login from "../../pages/Login"
import Chat from "../../pages/Chat"
import ThemePicker from "../ThemePicker"

function App() {
  const loggedIn = getFromLocalStorage("login-state")
  const navigate = useNavigate()

  // Storing default themes to the storage
  const localThemes: { [key: string]: ITheme } =
    getFromLocalStorage("all-themes")
  if (!localThemes) {
    setToLocalStorage("all-themes", defaultThemes)
  }

  // Setting up the themes
  const { theme, themeLoaded, setCustomTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  // Storing default custom theme to the storage
  const localCustomTheme: { [key: string]: ITheme } =
    getFromLocalStorage("custom-theme")
  if (!localCustomTheme) {
    setCustomTheme({
      ...defaultThemes.default,
      id: "custom_theme",
      name: "Custom Theme",
    })
  }

  // Setting selected theme on theme reload
  useEffect(() => {
    setSelectedTheme(theme)
  }, [theme, themeLoaded])

  const logoutHandler = (e: SyntheticEvent) => {
    setToLocalStorage("login-state", false)
    navigate("/", { replace: true })
  }

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <StyledApp>
            <header>
              <Nav>
                {loggedIn && (
                  <NavLinks onClick={logoutHandler}>Logout</NavLinks>
                )}
                <ThemePicker themeSetter={setSelectedTheme} />
              </Nav>
            </header>
            <Routes>
              <Route
                path="/"
                element={
                  loggedIn ? <Navigate to="/chat" /> : <Navigate to="/login" />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/chat" element={<Chat chatAnimationDelay={600} />} />
            </Routes>
          </StyledApp>
        </ThemeProvider>
      )}
    </>
  )
}

export default App

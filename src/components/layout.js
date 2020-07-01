import React from "react"
import { Link } from "gatsby"
import { light, dark } from "../styles/theme"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/globalStyles"
import Header from "./header"
import { useDarkMode } from "../styles/useDarkMode"
import Navbar from "./navbar"
import Footer from "./Footer"
import ParticlesBg from "./ParticlesBg"

const LayoutComponent = styled.div`
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  @media (min-width: 768px) {
    padding: 0 0.25rem;
  }
`

const Layout = ({ location, title, children }) => {
  const [theme, toggleTheme] = useDarkMode()
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <LayoutComponent>
        <GlobalStyles />
        <ParticlesBg />
        <Header>
          <Link to={`/`}>{title}</Link>
        </Header>
        <Navbar location={location} toggleTheme={toggleTheme} theme={theme} />
        <main>{children}</main>
        <Footer />
      </LayoutComponent>
    </ThemeProvider>
  )
}

export default Layout

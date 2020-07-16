import React from "react"
import { Link } from "gatsby"
import { light, dark } from "../styles/theme"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/globalStyles"
import Header from "../views/header"
import { useDarkMode } from "../styles/useDarkMode"
import Navbar from "../views/navbar"
import Footer from "../views/Footer"
import ParticlesBg from "./ParticlesBg"
import StyledLine from "./StyledLine"

import { Helmet } from "react-helmet"

const LayoutComponent = styled.div`
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  @media (min-width: 768px) {
    padding: 0 0.25rem;
  }
`

const Layout = ({ location, title, children }) => {
  const [theme, toggleTheme] = useDarkMode()
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&family=Roboto+Mono&family=Rowdies&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <LayoutComponent>
        <GlobalStyles />
        <ParticlesBg />
        <Header>
          <Link to={`/`}>{title}</Link>
        </Header>
        <Navbar location={location} toggleTheme={toggleTheme} theme={theme} />
        <main>{children}</main>
        <StyledLine />
        <Footer />
      </LayoutComponent>
    </ThemeProvider>
  )
}

export default Layout

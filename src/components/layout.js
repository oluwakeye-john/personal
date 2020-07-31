import React from "react"
import { light, dark } from "../styles/theme"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/globalStyles"
import { useDarkMode } from "../styles/useDarkMode"
import Navigation from "../views/navigation"
import Footer from "../views/footer"
// import ParticlesBg from "./particlesBg"
import StyledLine from "./styledLine"

import { IconContext } from "react-icons"

import { Helmet } from "react-helmet"
import ScrollUp from "./scrollUp"

const LayoutComponent = styled.div`
  /* transition: filter 0.1s; */
  max-width: 750px;
  margin: 0 auto;
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

  light.theme = "light"
  dark.theme = "dark"

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&family=Rowdies&family=Waiting+for+the+Sunrise&family=Prompt&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Navigation location={location} toggleTheme={toggleTheme} theme={theme} />
      <LayoutComponent>
        <GlobalStyles />
        {/* <ParticlesBg /> */}
        <IconContext.Provider
          value={{
            style: {
              verticalAlign: "middle",
              display: "inline",
              height: "100%",
            },
            size: "1.2em",
          }}
        >
          <main style={{ marginBottom: "3rem" }}>{children}</main>
          <StyledLine />
          <Footer />
          <ScrollUp aria-hidden={true} />
        </IconContext.Provider>
      </LayoutComponent>
    </ThemeProvider>
  )
}

export default Layout

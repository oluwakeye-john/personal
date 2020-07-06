import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import StyledText from "./StyledText"

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
]

const NavbarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  @media (max-width: 500px) {
    justify-content: space-between;
  }
`

const NavbarItem = styled(Link)`
  color: black;
  margin-right: 30px;
  @media (max-width: 500px) {
    margin-right: 0;
  }
  font-weight: 700;
  color: ${({ theme }) => theme.navbarLink};
`

const ActiveNavbarItem = ({ to, children }) => (
  <StyledText>
    <NavbarItem to={to}>{children}</NavbarItem>
  </StyledText>
)

const ToggleButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`

const Navbar = ({ location, toggleTheme, theme }) => {
  console.log(location.pathname)
  return (
    <NavbarContainer>
      {items.map((item, key) => {
        return item.url === location.pathname ? (
          <ActiveNavbarItem to={item.url} key={key}>
            {item.name}
          </ActiveNavbarItem>
        ) : (
          <NavbarItem to={item.url} key={key}>
            {item.name}
          </NavbarItem>
        )
      })}
      <ToggleButton onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </ToggleButton>
    </NavbarContainer>
  )
}

export default Navbar

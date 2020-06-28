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

const NavbarItem = styled(Link)`
  display: inline;
  color: black;
  padding-right: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.navbarLink};
`

const ActiveNavbarItem = ({ children }) => (
  <StyledText>
    <NavbarItem>{children}</NavbarItem>
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
    <div>
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
    </div>
  )
}

export default Navbar

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import StyledText from "../components/StyledText"

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
  margin-bottom: 3rem;
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
  /* color: ${({ color }) => color}; */
  color: inherit;
  transition: 1s;
  font-size: 1rem;

  cursor: pointer;
`

const Navbar = ({ location, toggleTheme, theme }) => {
  return (
    <NavbarContainer>
      {items.map((item, key) => {
        let current = item.url === location.pathname

        // highlight blog navbar link when in one of blog posts
        current =
          item.url === "/blog" && location.pathname.includes("/blog")
            ? true
            : current

        return current ? (
          <ActiveNavbarItem to={item.url} key={key}>
            {item.name}
          </ActiveNavbarItem>
        ) : (
          <NavbarItem to={item.url} key={key}>
            {item.name}
          </NavbarItem>
        )
      })}
      <ToggleButton
        onClick={toggleTheme}
        color={theme === "light" ? "black" : "yellow"}
        className={
          theme === "light" ? "fas fa-moon fa-fw " : "fas fa-sun fa-fw "
        }
      ></ToggleButton>
    </NavbarContainer>
  )
}
// {theme === "light" ? "🌙" : "☀️"}
export default Navbar

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaSun as Sun, FaRegMoon as Moon, FaBars } from "react-icons/fa"
import StyledText from "../components/styledText"

const ToggleButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  /* color: ${({ color }) => color}; */
  color: inherit;
  transition: 1s;
  font-size: 1rem;
  transition: .5s;
  transform: ${({ light }) => (light ? "rotate(0deg)" : "rotate(180deg)")};
  cursor: pointer;
  &:focus{
    outline: 0;
  }
`

const NavigationContainer = styled.div`
  width: 100%;
  /* color: #fafafa; */
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "white" : "inherit"};
  box-shadow: ${({ theme }) =>
    theme.mode === "light" ? "0 0 10px #ccc" : "0"};

  border-bottom: ${({ theme }) =>
    theme.mode === "light" ? "0" : "1px solid rgb(56, 68, 77)"};

  margin-bottom: 4rem;
  padding: 0.7rem 3rem;
  font-family: "Rowdies", sans-serif;

  display: flex;
  justify-content: space-around;
  align-items: center;

  /* background-color: rgb(25, 39, 52); */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.7rem 1rem;
  }

  position: relative;
`

const NavLabel = styled.div`
  margin: 0;
  width: 20%;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    text-align: left;
    width: 100%;
  }
`

const NavbarNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavbarItem = styled(Link)`
  margin-right: 2rem;
  color: ${({ theme }) => theme.navbarLink};
`

const ActiveNavbarItem = styled(NavbarItem)`
  color: ${({ theme }) => theme.primary};
`

const NavbarToggler = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
    font-size: 1.3rem;
  }
`

const items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const Navigation = ({ location, toggleTheme, theme }) => {
  return (
    <NavigationContainer>
      <NavLabel>
        <Link to="/" style={{ color: "inherit" }}>
          <StyledText>Keye John</StyledText>
        </Link>
      </NavLabel>

      <NavbarToggler>
        <FaBars />
      </NavbarToggler>

      <NavbarNav>
        {items.map((item, index) => {
          if (
            location.pathname === item.link ||
            (location.pathname.includes("/blog") && item.link === "/blog")
          ) {
            return (
              <ActiveNavbarItem to={item.link} key={index}>
                <StyledText>{item.name}</StyledText>
              </ActiveNavbarItem>
            )
          } else {
            return (
              <NavbarItem to={item.link} key={index}>
                {item.name}
              </NavbarItem>
            )
          }
        })}
        <ToggleButton
          onClick={toggleTheme}
          color={theme === "light" ? "black" : "yellow"}
          light={theme === "light" ? true : false}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </ToggleButton>
      </NavbarNav>
    </NavigationContainer>
  )
}

export default Navigation

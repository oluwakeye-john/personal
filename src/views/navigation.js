import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  FaSun as Sun,
  FaRegMoon as Moon,
  FaBars,
  FaTimes,
  FaCode,
} from "react-icons/fa"
import StyledText from "../components/styledText"

const ToggleButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  /* color: inherit; */

  color: ${({ theme }) => theme.navbarLink};

  @media (max-width: 768px) {
    color: rgba(255, 255, 255, 0.5);

    position: absolute;
    top: 2rem;
    left: 1.5rem;
    font-size: 1.3rem;
    z-index: 13;
  }

  transition: 1s;
  font-size: 1rem;
  transition: 0.5s;
  transform: ${({ light }) => (light ? "rotate(0deg)" : "rotate(180deg)")};
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`

const NavigationContainer = styled.div`
  width: 100%;
  & + div {
    @media (max-width: 768px) {
      /* filter: ${({ sidebarOpen }) => (sidebarOpen ? "blur(1px)" : "")}; */
      /* position: ${({ sidebarOpen }) => (sidebarOpen ? "fixed" : "")}; */
    }
  }

  /* background: transparent; */
  background: ${({ theme }) => theme.bg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  

  margin-bottom: 4rem;
  padding: 0.7rem 5rem;
  font-family: "Rowdies", sans-serif;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.7rem 1.5rem;
  }

  transition: background 0.2s ;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
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
    display: flex;
    top: 0;
    left: 0;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    /* background: ${({ theme }) => theme.bg}; */
    background: rgb(25,39,52);

    box-shadow: rgba(0, 0, 0, 0.1) 3px 0px 18px;

    transition: transform 0.5s;

    overflow-x: hidden;

    z-index: 10;
    transform: ${({ sidebarOpen }) =>
      sidebarOpen ? "translateX(0)" : "translateX(-100vw)"};
  }
`

const NavbarItem = styled(Link)`
  margin-right: 2rem;
  color: ${({ theme }) => theme.navbarLink};
  transition: opacity 0.2s;

  @media (max-width: 768px) {
    color: rgba(255, 255, 255, 0.5);
    margin: 2rem;
    font-size: 18px;
    width: 85%;
  }

  &:hover {
    opacity: 0.7;
  }
`

const ActiveNavbarItem = styled(NavbarItem)`
  color: ${({ theme }) => theme.primary};
`

const NavbarToggler = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.3rem;
    z-index: 13;
    transition: 0.4s;
    transform: ${({ sidebarOpen }) => (sidebarOpen ? "rotateX(180deg)" : "")};
    cursor: pointer;

    /* color: ${({ theme }) => theme.navbarLink}; */

    @media (max-width: 768px) {
      color: ${({ sidebarOpen }) =>
        sidebarOpen ? "rgba(255, 255, 255, 0.5)" : "inherit"};
    }
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

const lockScroll = val => {
  if (!val) {
    typeof window !== "undefined" &&
      window.document.body.classList.remove("fixed")
  } else {
    typeof window !== "undefined" && window.document.body.classList.add("fixed")
  }
}

const Navigation = ({ location, toggleTheme, theme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    lockScroll(!sidebarOpen)
    setSidebarOpen(!sidebarOpen)
  }
  const handleToggle = () => {
    lockScroll(false)
    setSidebarOpen(false)
    toggleTheme()
  }

  const closeOnEscape = e => {
    if (e.keyCode === 27) {
      setSidebarOpen(false)
      lockScroll(false)
    }
  }

  const unlockOnScroll = e => {
    if (e.target.innerWidth > 768) {
      lockScroll(false)
    } else {
      lockScroll(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", closeOnEscape)
      window.addEventListener("resize", unlockOnScroll)
    }
    return () => {
      lockScroll(false)
      window.removeEventListener("keydown", closeOnEscape)
      window.removeEventListener("resize", unlockOnScroll)
    }
  }, [])

  return (
    <NavigationContainer sidebarOpen={sidebarOpen}>
      <NavLabel>
        <Link to="/" style={{ color: "inherit" }}>
          <StyledText>
            <FaCode /> John
          </StyledText>
        </Link>
      </NavLabel>

      <NavbarToggler onClick={toggleSidebar} sidebarOpen={sidebarOpen}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </NavbarToggler>

      <NavbarNav sidebarOpen={sidebarOpen}>
        {items.map((item, index) => {
          let loc = location.pathname
          if (loc.length > 1 && loc.endsWith("/")) {
            loc = loc.substring(0, loc.length - 1)
          }
          if (
            loc === item.link ||
            (loc.includes("/blog") && item.link === "/blog") ||
            (loc.includes("/tag") && item.link === "/blog")
          ) {
            return (
              <ActiveNavbarItem
                to={item.link}
                key={index}
                onClick={toggleSidebar}
              >
                <StyledText>{item.name}</StyledText>
              </ActiveNavbarItem>
            )
          } else {
            return (
              <NavbarItem to={item.link} key={index} onClick={toggleSidebar}>
                {item.name}
              </NavbarItem>
            )
          }
        })}
        <ToggleButton
          onClick={handleToggle}
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

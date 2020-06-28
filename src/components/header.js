import React from "react"
import styled from "styled-components"
import StyledText from "./StyledText"
import { Link } from "gatsby"

const TopHeader = styled.div`
  padding: 3rem 0;
  line-height: 1.2;
  @media (max-width: 768px) {
    padding-top: 0.5rem;
    padding-bottom: 1.8rem;
  }
`

const HeaderComponent = styled(StyledText)`
  padding: 0;
  margin: 0;
  font-size: 4rem;
  font-weight: 900;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`

const SubHeaderComponent = styled(HeaderComponent)`
  margin: 0;
  padding: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`

const Header = () => {
  return (
    <Link to="/">
      <TopHeader>
        <HeaderComponent>Oluwakeye John</HeaderComponent>
        <SubHeaderComponent>Web Developer</SubHeaderComponent>
      </TopHeader>
    </Link>
  )
}

export default Header

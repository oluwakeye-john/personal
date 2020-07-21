import React from "react"
import styled from "styled-components"
import StyledText from "../components/StyledText"
import { Link } from "gatsby"

const TopHeader = styled.div`
  margin: 3rem 0;
  line-height: 1.2;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-bottom: 1.8rem;
  }
`

const HeaderComponent = styled(StyledText)`
  padding: 0;
  margin: 0;
  font-size: 4rem;
  font-weight: 900;
  display: block;
  font-family: "Rowdies", sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2.2rem;
  }

  @media (max-width: 350px) {
    font-size: 2rem;
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
        <HeaderComponent as="h1">Oluwakeye John</HeaderComponent>
        <SubHeaderComponent>Web Developer</SubHeaderComponent>
      </TopHeader>
    </Link>
  )
}

export default Header

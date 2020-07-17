import React from "react"
import styled from "styled-components"
import SocialButtons from "../components/SocialButtons"
import Bubble from "../components/animations/bubble"

const FooterContainer = styled.footer`
  text-align: center;
  margin: 3rem 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        {`</>`} with <Bubble>💖</Bubble> by Oluwakeye John
      </p>
      <p>© {new Date().getFullYear()}</p>
      <SocialButtons />
    </FooterContainer>
  )
}
// ❤️

export default Footer

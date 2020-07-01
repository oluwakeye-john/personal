import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  text-align: center;
  margin: 3rem 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>Built with love by Oluwakeye John</p>
      <p>© {new Date().getFullYear()}</p>
    </FooterContainer>
  )
}

export default Footer

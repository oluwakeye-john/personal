import React from "react"
import styled from "styled-components"
import SocialButtons from "../components/SocialButtons"

const FooterContainer = styled.footer`
  text-align: center;
  margin: 3rem 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        {`</>`} with{" "}
        <span role="img" aria-label={"love"}>
          💖
        </span>{" "}
        by Oluwakeye John
      </p>
      <p>© {new Date().getFullYear()}</p>
      <SocialButtons small color="#8A858B" />
    </FooterContainer>
  )
}
// ❤️

export default Footer

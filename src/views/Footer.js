import React from "react"
import styled from "styled-components"
import SocialButtons from "../components/SocialButtons"
import { FaRegSmile as FaSmile, FaRegHeart as Heart } from "react-icons/fa"
import Bubble from "../components/animations/bubble"

const FooterContainer = styled.footer`
  text-align: center;
  margin: 3rem 0;
`
const Quote = styled.p`
  font-family: "Waiting for the Sunrise", sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        {`</>`} with{" "}
        <Bubble>
          <Heart color="red" style={{ display: "inline" }} />
        </Bubble>
        {` `}
        by Oluwakeye John
      </p>
      <Quote>
        How do you comfort a javascript bug? <code>Console</code> it
        {` `}
        <FaSmile />
      </Quote>
      <p>© {new Date().getFullYear()}</p>
      <SocialButtons small color="#8A858B" />
    </FooterContainer>
  )
}

export default Footer

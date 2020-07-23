import React from "react"
import styled from "styled-components"
import SocialButtons from "../components/socialButtons"
import {
  FaRegSmile as FaSmile,
  FaRegHeart as Heart,
  FaCode,
} from "react-icons/fa"
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

const LoveBubble = styled(Bubble)`
  color: ${({ theme }) => theme.primary};
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        <FaCode /> with{" "}
        <LoveBubble>
          <Heart style={{ display: "inline" }} />
        </LoveBubble>
        {` `}
        by Oluwakeye John
      </p>
      <Quote>
        How do you comfort a javascript bug? Console it
        {` `}
        <FaSmile />
      </Quote>
      <p>© Oluwakeye John {new Date().getFullYear()}</p>
      <SocialButtons small color="#8A858B" />
    </FooterContainer>
  )
}

export default Footer

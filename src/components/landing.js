import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

const LandingContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-flow: column wrap;
  }
  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`

const LandingImage = styled.div`
  flex-basis: 30%;
  @media (max-width: 768px) {
    text-align: center;
  }
  /* background-color: grey; */
  align-self: center;
  flex: 1;
`

const Image = styled(Img)`
  border-radius: 50%;
`

const LandingText = styled.div`
  flex-basis: 70%;
  flex: 3;
`

const Landing = () => {
  const data = useStaticQuery(graphql`
    query LandingQuery {
      avatar: file(absolutePath: { regex: "/john2.jpeg/" }) {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <LandingContainer>
      <LandingImage>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Oluwakeye John"
          style={{ width: "150px", height: "150px" }}
        />
      </LandingImage>
      <LandingText>
        <h1>Hello 👋 </h1>
        <p>
          Hi, I'm Marc, a happily married, 30-something-year-old full-stack web
          developer 💻 with a strong educational background in software
          engineering. I am doing freelance work 🚀 based in Luxembourg 🇱🇺, but
          I do work remotely for international clients.
        </p>
      </LandingText>
    </LandingContainer>
  )
}

export default Landing

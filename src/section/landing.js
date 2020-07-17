import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import TypeWriter from "../components/animations/typewriter"
import Wave from "../components/animations/wave"
import Button from "../components/Button"
import { Link } from "gatsby"

import Rotate from "../components/animations/rotate"

const LandingContainer = styled.div`
  margin-bottom: 3rem;
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
          fixed(width: 450, height: 450) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <LandingContainer>
      <LandingImage>
        <Rotate>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt="Oluwakeye John"
            style={{ width: "150px", height: "150px" }}
          />
        </Rotate>
      </LandingImage>

      <LandingText>
        <h1>
          <Wave>👋</Wave>
          <TypeWriter text="Hi There!" />
        </h1>
        <p>
          Hi, I'm John, a Full Stack web developer 💻 based in Ibadan, Nigeria.
          I specialize in JavaScript and i also code Python🚀
          <Link to="/about"> Read More</Link>
        </p>
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <Link to="/contact">
            <Button>Hire Me</Button>
          </Link>
          <a href="/resume.pdf" target="_black">
            <Button>View CV</Button>
          </a>
        </div>
      </LandingText>
    </LandingContainer>
  )
}

export default Landing

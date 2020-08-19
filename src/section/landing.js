import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import TypeWriter from "../components/animations/typewriter"
import Wave from "../components/animations/wave"
import Button from "../components/button"
import { Link } from "gatsby"

const LandingContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-flow: column wrap;
  }
  @media (min-width: 768px) {
    flex-flow: row wrap;
    margin-top: 2rem;
  }
`

const Rot = styled.div`
  @keyframes rot {
    0% {
      /* transform: rotate(0deg); */
      filter: grayscale(0);
    }
    50% {
      filter: grayscale(200%);
    }
    100% {
      filter: grayscale(0);
    }
  }

  /* transition: transform 2s; */

  animation-duration: 3s;
  animation-name: rot;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  /* &:hover {
    transform: rotate(360deg);
  } */
`

const LandingImageBorder = styled.div`
  display: inline-block;
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.primary};
  line-height: 0;
  border-radius: 50%;
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

const texts = ["Hey There!", "Hello world", "Hola!"]

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
        <Rot>
          <LandingImageBorder>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="Oluwakeye John"
              style={{ width: "150px", height: "150px" }}
            />
          </LandingImageBorder>
        </Rot>
      </LandingImage>

      <LandingText>
        <h2 style={{ fontSize: "2rem" }}>
          <Wave>
            <span aria-hidden>👋</span>
          </Wave>
          {` `}
          <TypeWriter texts={texts} />
        </h2>
        <p>
          Heyy... I'm <strong>Oluwakeye John</strong>, a Full Stack web
          developer <span aria-hidden>💻</span> based in Nigeria. I specialize
          in JavaScript and I also code Python.
          <Link to="/about"> More about me.</Link>
        </p>
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <Link to="/projects">
            <Button>My works</Button>
          </Link>
          <Link to="/about">
            <Button>About Me</Button>
          </Link>
          {/* <a href="/resume.pdf" target="_black">
            <Button>View CV</Button>
          </a> */}
        </div>
      </LandingText>
    </LandingContainer>
  )
}

export default Landing

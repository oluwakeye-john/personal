import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

const IntroSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`

const AboutContainer = styled.div`
  color: ${({ theme }) => theme.blogTextNormal};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.textNormal};
  }
`

const Image = styled(Img)`
  border-radius: 10px;
  width: 35%;
  @media (max-width: 768px) {
    width: 70%;
  }
`

const AboutText = styled.div`
  width: 60%;
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />

      <AboutContainer>
        <IntroSection>
          <Image
            fluid={data.avatar.childImageSharp.fluid}
            alt="Oluwakeye John"
          />
          <AboutText>
            <h2>Who's this guy?</h2>
            <p>
              Hi, I'm John Oluwakeye, a Full Stack web developer{" "}
              <span aria-hidden>💻</span> based in Ibadan, Nigeria. I specialize
              in JavaScript and i also code Python
              <span aria-hidden>🚀</span>
            </p>
          </AboutText>
        </IntroSection>

        <h2>More about me</h2>
        <p>
          I am passionate about web development. I like building fast, intuitive
          and responsive websites. I have worked on a number of projects. You
          can find some of my projects <Link to="/projects">here</Link>...
        </p>
        <p>
          I love learning new skills, especially those that make development
          faster and better. I also love teaming with fellow developers to build
          amazing stuffs.
        </p>
        <p>
          If you have any web development needs, feel free to{" "}
          <Link to="/contact">contact</Link> or get to know me a little better.
        </p>
      </AboutContainer>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/john.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

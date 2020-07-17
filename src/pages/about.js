import React from "react"
import { graphql } from "gatsby"

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

const AboutContainer = styled.div``

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
            <h3>Who's this guy?</h3>
            <p>
              Hi, I'm John, a Full Stack web developer 💻 based in Ibadan,
              Nigeria. I specialize in JavaScript and i also code Python🚀
            </p>
          </AboutText>
        </IntroSection>

        <h3>Hobbies</h3>
        <p>I love programming</p>
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

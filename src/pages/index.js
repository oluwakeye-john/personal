import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/section/landing"
import StyledLine from "../components/StyledLine"
import Skill from "../components/section/Skills"
import Projects from "../components/section/projects"
import styled from "styled-components"

const IndexContainer = styled.div`
  padding: 2px;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <IndexContainer>
        <Landing />
        <StyledLine />
        <Skill />
        <StyledLine />
        <Projects />
      </IndexContainer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

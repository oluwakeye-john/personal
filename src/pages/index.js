import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../section/landing"
import StyledLine from "../components/styledLine"
import Skill from "../section/skills"
import Projects from "../section/projects"
import styled from "styled-components"
import BlogSection from "../section/blog"

const IndexContainer = styled.div`
  padding: 2px;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" pathname="/" />
      <IndexContainer>
        <Landing />
        <StyledLine />
        <Skill />
        <StyledLine />
        <Projects />
        <StyledLine />
        <BlogSection />
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
  }
`

//GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true gatsby build --log-pages

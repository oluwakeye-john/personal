import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledLine from "../components/StyledLine"
import styled from "styled-components"
import ProjectList from "../components/projectList"

const ProjectsContainer = styled.div`
  padding: 2px;
`

const ProjectsHeading = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      <ProjectsContainer>
        <ProjectsHeading>🚀 My Projects</ProjectsHeading>
        <ProjectList />
      </ProjectsContainer>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

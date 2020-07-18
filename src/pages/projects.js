import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ProjectList from "../components/projectList"
import SectionHeading from "../components/sectionHeading"

const ProjectsContainer = styled.div`
  padding: 2px;
`

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      <ProjectsContainer>
        <SectionHeading>
          <span aria-hidden>🚀</span> My Projects
        </SectionHeading>
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

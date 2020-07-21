import React from "react"
import styled from "styled-components"
import { CenterButton } from "../components/Button"
import ProjectList from "../components/projectList"
import { Link } from "gatsby"
import SectionHeading from "../components/sectionHeading"

const ProjectsContainer = styled.div`
  margin: 3rem 0;
`

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionHeading>
        <span aria-hidden>🚀</span> My Works
      </SectionHeading>

      <ProjectList number={2} />
      <Link to="/projects">
        <CenterButton>View More</CenterButton>
      </Link>
    </ProjectsContainer>
  )
}

export default Projects

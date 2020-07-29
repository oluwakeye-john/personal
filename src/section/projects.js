import React from "react"
import styled from "styled-components"
import { CenterLink } from "../components/button"
import ProjectList from "../components/projectList"
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
      <CenterLink to="/projects">View More</CenterLink>
    </ProjectsContainer>
  )
}

export default Projects

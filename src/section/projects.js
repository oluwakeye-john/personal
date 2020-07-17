import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import Card from "../components/Card"
import ProjectList from "../components/projectList"
import { Link } from "gatsby"

const ProjectsContainer = styled.div`
  margin: 3rem 0;
`

const ProjectsHeading = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`
const ButtonWrapper = styled.div`
  text-align: center;
`

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeading>🚀 My Works</ProjectsHeading>

      <ProjectList number={2} />
      <ButtonWrapper>
        <Link to="/projects">
          <Button>View More</Button>
        </Link>
      </ButtonWrapper>
    </ProjectsContainer>
  )
}

export default Projects

import React from "react"
import styled from "styled-components"
import Button from "./Button"

const ProjectsContainer = styled.div`
  margin: 3rem 0;
`

const ProjectsHeading = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
`

const ProjectList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const ProjectItem = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  flex-basis: 1;
  width: 280px;
  margin: 1rem;
  text-align: center;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 5px ${({ theme }) => theme.buttonBorder};
  }
`
const ProjectButton = styled(Button)`
  padding: 0.2rem 1.1rem;
  margin: 0 5px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.buttonBorder};
`

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeading>🚀 Projects</ProjectsHeading>

      <ProjectList>
        <ProjectItem>
          <h3>Chat App</h3>
          <p>A real-time chat app built with nodejs, socketio and webRTC</p>
          <ProjectButton as="a" href="#">
            View Site
          </ProjectButton>
          <ProjectButton as="a" href="#">
            View Code
          </ProjectButton>
        </ProjectItem>
        <ProjectItem>
          <h3>Portfolio</h3>
          <p>
            This present portfolio you are on, built with gatsby and styled
            components
          </p>
          <ProjectButton as="a" href="#">
            View Site
          </ProjectButton>
          <ProjectButton as="a" href="#">
            View Code
          </ProjectButton>
        </ProjectItem>
        <ProjectItem>
          <h3>Hello world</h3>
          <p>Lorem Ipsum</p>
          <ProjectButton as="a" href="#">
            View Site
          </ProjectButton>
          <ProjectButton as="a" href="#">
            View Code
          </ProjectButton>
        </ProjectItem>
      </ProjectList>
    </ProjectsContainer>
  )
}

export default Projects

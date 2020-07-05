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
  margin-bottom: 2rem;
`

const ProjectList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ProjectItem = styled.div`
  padding: 2.5rem 10px;
  border: 1px solid #ccc;
  width: 43%;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin-bottom: 2rem;
  text-align: center;
  border-radius: 10px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.cardBg};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.cardShadow};
  }
`

const ProjectItemHeading = styled.h3`
  margin: 0;
  padding: 0;
  font-family: arial;
`

const ProjectButton = styled(Button)`
  padding: 0.2rem 1rem;
  margin: 0 5px;
`

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeading>🚀 Projects</ProjectsHeading>

      <ProjectList>
        <ProjectItem>
          <ProjectItemHeading>Chat App</ProjectItemHeading>
          <p>A real-time chat app built with nodejs, socketio and webRTC</p>
          <ProjectButton as="a" href="#">
            View Site
          </ProjectButton>
          <ProjectButton as="a" href="#">
            View Code
          </ProjectButton>
        </ProjectItem>
        <ProjectItem>
          <ProjectItemHeading>Portfolio</ProjectItemHeading>
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
          <ProjectItemHeading>Hello world</ProjectItemHeading>
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

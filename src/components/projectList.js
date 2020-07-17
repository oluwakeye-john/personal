import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import Card from "../components/Card"

const ProjectListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ProjectItem = styled(Card)`
  padding: 2.5rem 10px;
  text-align: center;
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

const projects = [
  {
    name: "Viz Movies",
    description:
      "A movie website, similar to netflix... Without the download button",
    live: "https://vizmovies.netlify.app",
    code: "",
  },
  {
    name: "Eaveswall",
    description: "Eaveswall is a univeristy blogging platform.",
    live: "https://eaveswall.com",
    code: "",
  },
  {
    name: "Video App",
    description:
      "A video chat application built with webRTC, socket.io and nodejs",
    live: "https://lens-chat.netlify.app",
    code: "",
  },
]

const ProjectList = ({ number }) => {
  return (
    <ProjectListContainer>
      {projects.slice(0, number).map((project, index) => (
        <ProjectItem key={index}>
          <ProjectItemHeading>{project.name}</ProjectItemHeading>
          <p>{project.description}</p>
          <ProjectButton as="a" href={project.live} target="_blank">
            View Site
          </ProjectButton>
        </ProjectItem>
      ))}
    </ProjectListContainer>
  )
}

export default ProjectList

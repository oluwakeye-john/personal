import React from "react"
import styled from "styled-components"

const SkillHeading = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`

const SectionHeading = ({ children }) => {
  return (
    <SkillHeading>
      <>{children}</>
    </SkillHeading>
  )
}

export default SectionHeading

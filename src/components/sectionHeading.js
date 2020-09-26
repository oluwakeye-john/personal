import React from "react"
import styled from "styled-components"

const SkillHeading = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
  font-size: 2rem;
  position: relative;
`

const Underline = styled.div`
  border-top: 2px solid ${({ theme }) => theme.primary};
  width: 40px;
  margin: 0 auto;
  margin-bottom: 2rem;
`

const SectionHeading = ({ children }) => {
  return (
    <SkillHeading>
      <>{children}</>
      {/* <Underline /> */}
    </SkillHeading>
  )
}

export default SectionHeading

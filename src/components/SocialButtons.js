import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import styled from "styled-components"
import { Link } from "gatsby"

const SocialLink = styled(Link)`
  margin: 1rem;
`

const SocialButtons = () => {
  return (
    <div className="fa-2x">
      <SocialLink href="h">
        <span className="fab fa-twitter" />
      </SocialLink>
      <SocialLink>
        <span className="fab fa-dev" />
      </SocialLink>
      <SocialLink>
        <span className="fab fa-github" />
      </SocialLink>
      <SocialLink>
        <span className="fab fa-linkedin" />
      </SocialLink>
    </div>
  )
}

export default SocialButtons

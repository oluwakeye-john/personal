import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import styled from "styled-components"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

const SocialLink = styled(Link)`
  margin: 1rem;
`

const SocialButtons = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
            dev
          }
        }
      }
    }
  `)
  const { twitter, linkedin, dev, github } = data.site.siteMetadata.social
  return (
    <div className="fa-2x">
      <SocialLink href={`https://twitter.com/${twitter}`}>
        <span className="fab fa-twitter" />
      </SocialLink>
      <SocialLink href={`https://dev.to/${dev}`}>
        <span className="fab fa-dev" />
      </SocialLink>
      <SocialLink href={`https://github.com/${github}`}>
        <span className="fab fa-github" />
      </SocialLink>
      <SocialLink href={`https://linkedin.com/${linkedin}`}>
        <span className="fab fa-linkedin" />
      </SocialLink>
    </div>
  )
}

export default SocialButtons

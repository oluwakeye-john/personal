import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import styled from "styled-components"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

const SocialLink = styled(Link)`
  margin: 1rem;
  color: ${({ color }) => (color ? color : "")};
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const SocialButtons = ({ border, small, color }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
            dev
            email
            codepen
          }
        }
      }
    }
  `)
  const {
    twitter,
    linkedin,
    dev,
    github,
    email,
    codepen,
  } = data.site.siteMetadata.social

  const links = [
    {
      name: "twitter",
      icon: "fab fa-twitter",
      url: `https://twitter.com/${twitter}`,
    },
    {
      name: "github",
      icon: "fab fa-github",
      url: `https://github.com/${github}`,
    },
    {
      name: "dev",
      icon: "fab fa-dev",
      url: `https://dev.to/${dev}`,
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      url: `https://linkedin.com/${linkedin}`,
    },
    {
      name: "codepen",
      icon: "fab fa-codepen",
      url: `https://codepen.io/${codepen}`,
    },
    {
      name: "Gmail",
      icon: "fas fa-envelope",
      url: `mailto:${email}`,
    },
  ]
  return (
    <div className={small ? "" : "fa-2x"}>
      {links.map((link, index) => (
        <SocialLink
          as="a"
          href={link.url}
          key={index}
          target="_blank"
          color={color ? color : ""}
        >
          <span className={`${link.icon} ${border ? "fa-border" : ""}`} />
        </SocialLink>
      ))}
    </div>
  )
}

export default SocialButtons

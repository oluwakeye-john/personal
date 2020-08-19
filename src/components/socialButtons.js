import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaCodepen,
} from "react-icons/fa"

import { useStaticQuery, graphql } from "gatsby"

const SocialLink = styled(Link)`
  margin: 1rem;
  color: ${({ color }) => (color ? color : "")};
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
    opacity: ${({ darkenOnHover }) => (darkenOnHover ? "0.8" : "1")};
  }
`

const SocialButtons = ({ border, small, color, darkenOnHover }) => {
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
      icon: FaTwitter,
      url: `https://twitter.com/${twitter}`,
    },
    // {
    //   name: "Gmail",
    //   icon: FaEnvelope,
    //   url: `mailto:${email}`,
    // },
    {
      name: "Codepen",
      icon: FaCodepen,
      url: `https://codepen.io/${codepen}/`,
    },
    {
      name: "github",
      icon: FaGithub,
      url: `https://github.com/${github}`,
    },
    {
      name: "dev",
      icon: FaDev,
      url: `https://dev.to/${dev}`,
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      url: `https://linkedin.com/${linkedin}`,
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
          rel="noreferrer"
          color={color ? color : ""}
          darkenOnHover={darkenOnHover}
        >
          <link.icon title={link.name} />
        </SocialLink>
      ))}
    </div>
  )
}

export default SocialButtons

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const BioContainer = styled.div`
  margin-bottom: 1rem;
`

const BioImage = styled(Image)`
  border-radius: 50%;
  float: left;
  margin-right: 20px;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/john2.jpeg/" }) {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <BioContainer>
      <BioImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          width: "50px",
          height: "50px",
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>
        <br />
        <a href={`https://twitter.com/${social.twitter}`}>Follow on Twitter</a>
      </p>
    </BioContainer>
  )
}

export default Bio

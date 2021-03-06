import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Button from "./button"

const BioContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`
const BioImageContainer = styled.div`
  padding: 2px;
  border: 2px solid ${({ theme }) => theme.primary};
  margin-right: 20px;
  border-radius: 50%;
`

const BioImage = styled(Image)`
  border-radius: 50%;
  float: left;
`

const RightText = styled.div`
  font-size: 15px;
  font-weight: 500;
`

const BioContactButton = styled(Button)`
  display: inline-block;
  padding: 0.1rem 0.5rem;
  margin-left: 10px;
  font-size: 15px;
  border-radius: 5px;
`

const Bio = ({ children }) => {
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
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <BioContainer>
      <BioImageContainer>
        <Link to="/about">
          <BioImage
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </Link>
      </BioImageContainer>
      <RightText>
        <Link to="/about" style={{ color: "inherit" }}>
          <strong>{author.name}</strong>
        </Link>
        {/* <BioContactButton>Contact</BioContactButton> */}
        <br />
        {children ? (
          <div style={{ fontSize: "15px" }}>{children}</div>
        ) : (
          <Link to="/contact">Contact Me</Link>
        )}
      </RightText>
    </BioContainer>
  )
}

export default Bio

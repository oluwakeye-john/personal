import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogCard from "./blogCard"
import styled from "styled-components"

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`

const BlogList = ({ number }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            timeToRead
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              tags
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const posts = number ? data.allMdx.edges.slice(0, number) : data.allMdx.edges

  return (
    <List>
      {posts.map(({ node }) => {
        return <BlogCard node={node} key={node.fields.slug} />
      })}
    </List>
  )
}

export default BlogList

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Card from "./Card"

const CardImage = styled(Img)`
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  padding: 1px;
  max-height: 250px;
`

const CardTitle = styled.h2`
  color: ${({ theme }) => theme.textNormal};
  /* font-family: arial; */
`

const BlogCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const image = node.frontmatter.featuredImage
  const ttr = node.timeToRead
  return (
    <Card>
      {image && (
        <Link to={`/blog${node.fields.slug}`}>
          <CardImage fluid={image.childImageSharp.fluid} />
        </Link>
      )}
      <div style={{ padding: "15px" }}>
        <CardTitle>
          <Link to={`/blog${node.fields.slug}`} style={{ color: "inherit" }}>
            {title}
          </Link>
        </CardTitle>
        <div style={{ fontStyle: "italic" }}>
          <small>{node.frontmatter.date}</small>
          <span style={{ textAlign: "right" }}>
            {` `}-{` `}
            <small>{ttr} min read</small>
          </span>
        </div>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </div>
    </Card>
  )
}

export default BlogCard

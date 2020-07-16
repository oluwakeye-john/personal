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
`

const CardExtra = styled.div`
  color: ${({ theme }) => theme.lightText};
`

const BlogCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const image = node.frontmatter.featuredImage
  const ttr = node.timeToRead

  const descRaw = node.frontmatter.description || node.excerpt
  const desc = descRaw.length > 40 ? descRaw.slice(0, 120) + "..." : descRaw

  return (
    <Card>
      {image && (
        <Link to={`/blog${node.fields.slug}`}>
          <CardImage fluid={image.childImageSharp.fluid} />
        </Link>
      )}
      <div style={{ padding: "15px" }}>
        <CardExtra>
          <small>
            <span className="fas fa-calendar" /> {node.frontmatter.date}
          </small>
          {` `}•{` `}
          <small>
            <span className="fas fa-clock" /> {ttr} min read
          </small>
        </CardExtra>
        <CardTitle>
          <Link to={`/blog${node.fields.slug}`} style={{ color: "inherit" }}>
            {title}
          </Link>
        </CardTitle>
        <section>
          <p>{desc}</p>
        </section>
      </div>
    </Card>
  )
}

export default BlogCard

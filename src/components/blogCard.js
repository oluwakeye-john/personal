import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Card from "./card"
import ColoredTags from "./coloredTags"
import {
  FaRegCalendarAlt as Calendar,
  FaRegClock as Clock,
} from "react-icons/fa"

const CardImage = styled(Img)`
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  padding: 1px;
  max-height: 250px;
`

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.textNormal};
  font-family: "Convergence";
  line-height: 1.3;
  font-size: 1.3rem;
  letter-spacing: 0.03em;
`

const CardExtra = styled.div`
  opacity: 0.8;
`

const BlogCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const image = node.frontmatter.featuredImage
  const ttr = node.timeToRead
  const tags = node.frontmatter.tags

  const desc = node.frontmatter.description || node.excerpt

  return (
    <Card>
      {image && (
        <Link to={`/blog${node.fields.slug}`}>
          <CardImage fluid={image.childImageSharp.fluid} alt={title} />
        </Link>
      )}
      <div style={{ padding: "15px" }}>
        <CardExtra>
          <small>
            <Calendar /> {node.frontmatter.date}
          </small>
          {` `}&nbsp;{` `}
          <small>
            <Clock /> {ttr} min read
          </small>
        </CardExtra>
        {tags && tags.length !== 0 && <ColoredTags icon tags={tags} />}

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

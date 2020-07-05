import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const FeaturedImage = styled(Img)`
  border-radius: 10px;
  max-height: 300px;
`

const BlogContainer = styled.div`
  a {
    text-decoration: underline;
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const featuredImage = post.frontmatter.featuredImage
  const ttr = post.timeToRead

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogContainer>
        <header>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <p>
          <span>{post.frontmatter.date}</span>
          <span style={{ textAlign: "right" }}>
            {` `}-{` `}
            <span>{ttr} min read</span>
          </span>
        </p>
        {featuredImage && (
          <FeaturedImage
            fluid={featuredImage.childImageSharp.fluid}
          ></FeaturedImage>
        )}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Bio />
        </footer>
      </BlogContainer>

      <div>
        <div style={{ display: "inline-block" }}>
          {previous && (
            <Link to={`/blog` + previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </div>
        <div style={{ textAlign: "right" }}>
          {next && (
            <Link to={`/blog` + next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
`

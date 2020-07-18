import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Share from "../components/share"

const FeaturedImage = styled(Img)`
  border-radius: 10px;
  max-height: 350px;
  margin: 2rem 0;
`

const BlogContainer = styled.div``

const BlogPostHeading = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const BlogSection = styled.section`
  color: ${({ theme }) => theme.blogTextNormal};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.textNormal};
  }
`

const BlogDetails = styled.p`
  color: ${({ theme }) => theme.lightText};
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
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
        <BlogPostHeading>{post.frontmatter.title}</BlogPostHeading>
        <BlogDetails>
          <span className="fas fa-calendar" /> {post.frontmatter.date}
          {` `}•{` `}
          <span className="fas fa-clock" /> {ttr} min read
          {` `}•{` `}
          <Link to="/about">By Oluwakeye John</Link>
        </BlogDetails>
        {featuredImage && (
          <FeaturedImage
            fluid={featuredImage.childImageSharp.fluid}
          ></FeaturedImage>
        )}
        <BlogSection style={{ marginBottom: "3rem" }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </BlogSection>
        <Share />
        <Bio />
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
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

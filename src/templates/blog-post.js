import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Share from "../components/share"
import ColoredTags from "../components/coloredTags"
import StyledLine from "../components/styledLine"

const FeaturedImage = styled(Img)`
  border-radius: 10px;
  max-height: 350px;
  margin-top: 2rem;
  margin-bottom: 4rem;
`

const BlogContainer = styled.div`
  margin-top: -2rem;
`

const BlogPostHeading = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  /* font-family: sans-serif; */
  /* font-family: "Nunito Sans", sans-serif; */
  font-family: Convergence;
`

const BlogSection = styled.section`
  color: ${({ theme }) => theme.blogTextNormal};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    color: ${({ theme }) => theme.textNormal};
  }
  a:hover {
    text-decoration: underline;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.7rem;
  }
`

const BlogDetails = styled.p`
  opacity: 0.8;
`

const RelatedBlog = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const { siteTitle, siteUrl } = data.site.siteMetadata
  const { previous, next } = pageContext
  const featuredImage = post.frontmatter.featuredImage
  const ttr = post.timeToRead
  const tags = post.frontmatter.tags

  const postUrl = `${siteUrl}/blog${post.fields.slug}`
  const description = post.frontmatter.description || post.excerpt

  const postImage = featuredImage ? featuredImage.childImageSharp.fluid : ""

  useEffect(() => {
    document.querySelector("html").classList.add("smooth-scroll")
    return () => {
      document.querySelector("html").classList.remove("smooth-scroll")
    }
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={description}
        image={postImage}
        pathname={location.pathname}
      />
      <BlogContainer>
        <BlogPostHeading>{post.frontmatter.title}</BlogPostHeading>
        <BlogDetails>
          <Bio>
            {post.frontmatter.date}
            {` `}
            <span>·</span>
            {` `}
            {ttr} min read
            {` `}
          </Bio>
          {/* <Link to="/about">By Oluwakeye John</Link> */}
        </BlogDetails>

        {featuredImage && (
          <FeaturedImage
            fluid={featuredImage.childImageSharp.fluid}
            alt={post.frontmatter.title}
          />
        )}
        <BlogSection style={{ marginBottom: "3rem" }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </BlogSection>
        <p style={{ display: "none" }}>
          You have a suggestion, or you want to know more about something I
          mentioned above? Then feel free to <Link to="/contact">contact</Link>{" "}
          me
        </p>
        <div style={{ marginBottom: "2rem" }} />
        {/* <StyledLine style={{ marginBottom: "1rem" }} /> */}
        <Share postUrl={postUrl} desc={description} />
        {/* <Bio /> */}
        {/* {tags && tags.length !== 0 && <ColoredTags icon tags={tags} />} */}
      </BlogContainer>

      <RelatedBlog>
        <div>
          {previous && (
            <Link to={`/blog` + previous.fields.slug} rel="prev">
              ⇦ {previous.frontmatter.title}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link to={`/blog` + next.fields.slug} rel="next">
              {next.frontmatter.title} ⇨
            </Link>
          )}
        </div>
      </RelatedBlog>

      {/* <Newsletter /> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogCard from "../components/blogCard"
import styled from "styled-components"

import { FaTags } from "react-icons/fa"

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`

const TagList = styled.ul`
  list-style-type: circle;
  margin: 0;
`

const TagTitle = styled.h1`
  text-align: center;
  margin: 2rem 0;
`

const AllTags = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
`

const TabItem = styled.li`
  margin: 1.5rem 0;
  padding-right: 10px;
`

const PostTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: underline;
  }
`

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location}>
      <SEO title={tagHeader} />
      <TagTitle>{tagHeader}</TagTitle>
      <TagList>
        {edges.map(({ node }, index) => {
          return (
            <TabItem key={index}>
              <Link to={`/blog${node.fields.slug}`}>
                <PostTitle>{node.frontmatter.title}</PostTitle>
              </Link>
              <p>{node.frontmatter.description}</p>
            </TabItem>
          )
        })}
      </TagList>
      <Link to="/tags">
        <AllTags>
          <FaTags /> All tags
        </AllTags>
      </Link>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`

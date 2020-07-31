import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const TagLink = styled(Link)`
  display: inline-block;
  margin: 1rem;
`

const TagBox = styled.div`
  padding: 0.5rem 1rem;
  display: inline-block;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 5px;
  border: 1px solid transparent;

  font-size: 15px;

  transition: 0.2s;

  &:hover {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.cardBg};
  }
`

const TagsPage = ({ data, location }) => {
  const { group } = data.allMdx
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Tags" />
      <div>
        <h1 style={{ textAlign: "center" }}>Tags</h1>
        <div>
          {group.map(tag => (
            <TagLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <TagBox key={tag.fieldValue}>
                {tag.fieldValue} ({tag.totalCount})
              </TagBox>
            </TagLink>
          ))}
        </div>
      </div>
    </Layout>
  )
}
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

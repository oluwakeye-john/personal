import React from "react"
import styled from "styled-components"
import { FaTags } from "react-icons/fa"

import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const colors = ["green", "orange", "teal"]

const Tag = styled.span`
  color: ${({ color }) => color};
  font-size: 16px;
`

const addHash = tag => {
  return tag[0] === "#" ? tag : "#" + tag
}
const ColoredTags = ({ tags, icon }) => {
  return (
    <div style={{ marginTop: ".5rem" }}>
      {icon && <FaTags />}
      {` `}
      {typeof tags === "object" ? (
        tags.map((tag, index) => (
          <Link to={`/tags/${kebabCase(tag)}/`} key={index}>
            <Tag color={colors[index]}>
              {addHash(tag)}
              {index !== tags.length - 1 && " • "}
            </Tag>
          </Link>
        ))
      ) : (
        <Tag color={0}>{addHash(tags)}</Tag>
      )}
    </div>
  )
}

export default ColoredTags

import React from "react"
import styled from "styled-components"

const colors = ["green", "orange", "teal"]

const Tag = styled.span`
  color: ${({ color }) => color};
  font-size: 16px;
`

const addHash = tag => {
  return tag[0] === "#" ? tag : "#" + tag
}
const ColoredTags = ({ tags, icon }) => {
  const splitTag = tags.split(", ")
  return (
    <div style={{ marginTop: ".5rem" }}>
      {icon && <span className="fas fa-tags" />}
      {` `}
      {typeof splitTag === "object" ? (
        splitTag.map((tag, index) => (
          <Tag color={colors[index]} key={index}>
            {addHash(tag)}
            {index !== splitTag.length - 1 && " • "}
          </Tag>
        ))
      ) : (
        <Tag color={0}>{addHash(splitTag)}</Tag>
      )}
    </div>
  )
}

export default ColoredTags

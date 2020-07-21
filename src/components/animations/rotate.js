import React from "react"
import styled from "styled-components"

const Rot = styled.span`
  display: inline-block;
  animation-name: rot;
  animation-timing-function: ease-in-out;
  animation-duration: 30s;
  animation-iteration-count: infinite;

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(15deg);
    }
    /* 50% {
      transform: rotate(0deg);
    } */
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const Rotate = ({ children }) => {
  return <Rot>{children}</Rot>
}

export default Rotate

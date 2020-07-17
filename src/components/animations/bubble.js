import React from "react"
import styled from "styled-components"

const Bub = styled.span`
  animation-name: bubble;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transform: scale(0);

  @keyframes bubble {
    0% {
      transform: scale(1.5);
    }
    10% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.7);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`

const Bubble = ({ children }) => {
  return <Bub>{children}</Bub>
}

export default Bubble

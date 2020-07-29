import React from "react"
import styled from "styled-components"

const Bub = styled.span`
  display: inline-block;
  animation-name: bubble;
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transform: scale(0);

  @keyframes bubble {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.4);
    }
    30% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

const Bubble = ({ children }) => {
  return <Bub>{children}</Bub>
}

export default Bubble

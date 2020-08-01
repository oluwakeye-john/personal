import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FaRegHeart as FaHeart } from "react-icons/fa"

const LikeContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.primary};
  text-align: center;
  color: white;
  border-radius: 50%;
  z-index: 10;

  cursor: pointer;
  color: white;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const Like = () => {
  const handleLike = () => {}

  return (
    <>
      <LikeContainer>
        <Circle onClick={handleLike}>
          <FaHeart />
        </Circle>
      </LikeContainer>
    </>
  )
}

export default Like

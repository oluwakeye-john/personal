import React, { useState } from "react"
import styled from "styled-components"
import { FaChevronUp } from "react-icons/fa"
import { Link } from "gatsby"

const ScrollContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.link};
  text-align: center;
  color: white;
  border-radius: 50%;
  z-index: 10;

  transition: transform 0.4s, background-color 0.4s;

  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(10rem)"};
`

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scroll = window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (Number(window.scrollY) > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  })

  return (
    <Link to="#">
      <ScrollContainer isVisible={isVisible}>
        <FaChevronUp />
      </ScrollContainer>
    </Link>
  )
}

export default ScrollUp

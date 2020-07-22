import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FaChevronUp } from "react-icons/fa"

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

  cursor: pointer;

  transition: transform 0.4s, background-color 0.4s;

  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(10rem)"};
`

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)
  let scroll

  useEffect(() => {
    if (typeof window !== "undefined") {
      scroll = window.addEventListener("scroll", () => {
        if (Number(window.scrollY) > 100) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      })
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scroll)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ScrollContainer isVisible={isVisible} onClick={scrollToTop}>
      <FaChevronUp />
    </ScrollContainer>
  )
}

export default ScrollUp

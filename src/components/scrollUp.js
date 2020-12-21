import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FaChevronUp } from "react-icons/fa"

const ScrollContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.primary};
  text-align: center;
  color: white;
  border-radius: 50%;
  z-index: 10;

  cursor: pointer;

  transition: transform 0.4s, background-color 0.4s;

  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateY(10rem)"};

  &:hover {
    transform: scale(1.05);
  }
`

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollCallback = () => {
    if (Number(window.scrollY) > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollCallback)
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollCallback)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <ScrollContainer isVisible={isVisible} onClick={scrollToTop}>
      <FaChevronUp />
    </ScrollContainer>
  )
}

export default ScrollUp

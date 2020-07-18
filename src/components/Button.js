import React from "react"
import styled from "styled-components"

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.buttonBorder};
  border-radius: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.buttonText};
  background-color: transparent;
  font-size: 1rem;
  transition: 0.3s;
  margin-right: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBorder};
    color: white;
  }

  &:focus {
    outline: 0;
  }
`
const CenterWrapper = styled.div`
  text-align: center;
`

export const CenterButton = ({ children }) => {
  return (
    <CenterWrapper>
      <Button>
        {children}
        {` `}
        <span className="fas fa-chevron-right" />
      </Button>
    </CenterWrapper>
  )
}

export default Button

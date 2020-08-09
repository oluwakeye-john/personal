import React from "react"
import styled from "styled-components"
import { FaChevronRight, FaCircleNotch } from "react-icons/fa"
import { Link } from "gatsby"

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  font-size: 1rem;
  transition: 0.3s;
  margin-right: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.1);
  }

  &:focus {
    outline: 0;
  }
`
const CenterWrapper = styled.div`
  text-align: center;
`

const Spin = styled.div`
  @keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
  & > * {
    display: inline-block;
    -webkit-animation: fa-spin 2s linear infinite;
    animation: fa-spin 2s linear infinite;
  }
`

export const LoadingButton = ({ text, loading, type = "button" }) => {
  return (
    <Button type={type} disabled={loading ? true : false}>
      {loading ? (
        <Spin>
          <FaCircleNotch />
        </Spin>
      ) : (
        text
      )}
    </Button>
  )
}

export const CenterLink = ({ children, to }) => {
  return (
    <CenterWrapper>
      <Link to={to}>
        <Button>
          {children}
          {` `}
          <FaChevronRight />
        </Button>
      </Link>
    </CenterWrapper>
  )
}

export default Button

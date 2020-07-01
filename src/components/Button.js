import styled from "styled-components"

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.buttonBorder};
  border-radius: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.buttonText};
  background-color: transparent;
  font-size: 1rem;
  transition: 0.2s;
  margin-right: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBorder};
    color: white;
  }
`

export default Button

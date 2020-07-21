import styled from "styled-components"

export const InputGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 47%;
  position: relative;
  margin-bottom: 2rem;
`

export const InputBox = styled.input`
  padding: 10px;
  width: 100%;
  &:focus {
    outline: 0;
  }
  &:focus + label {
    transform: translateY(-20px);
    font-size: small;
  }
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: small;
  }
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textNormal};

  transition: 0.3s;
`

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  margin: 4px 10px;
  transition: 0.3s;
  pointer-events: none;
  background-color: ${({ theme }) => theme.bg};
`

export const TextArea = styled(Input)`
  width: 100%;
`

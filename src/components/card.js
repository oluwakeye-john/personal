import styled from "styled-components"

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
  }
  width: 43%;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin-bottom: 4rem;
  cursor: default;
`

export default Card
//0 0 20px #ccc

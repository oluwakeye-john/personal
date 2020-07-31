import styled from "styled-components"

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.cardShadow};
  }
  width: 43%;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin-bottom: 4rem;
  cursor: default;
`

export default Card

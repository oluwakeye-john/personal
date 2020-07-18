import React from "react"
import styled from "styled-components"

const ShareButton = styled.div`
  display: inline-block;
  width: 40px;
  line-height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttonBorder};
  text-align: center;
  color: white;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: 0.2s;
  * {
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`

const ShareLogo = styled.span`
  margin-right: 1rem;
  margin-bottom: 1rem;
`

const Share = ({ link }) => {
  return (
    <div>
      <ShareLogo className="fas fa-share-alt" />
      <ShareButton as="a" href="/" className="fab fa-twitter" />
      <ShareButton as="a" href="/" className="fab fa-whatsapp" />
      <ShareButton as="a" href="/" className="fab fa-facebook" />
      <ShareButton as="a" href="/" className="fab fa-linkedin" />
    </div>
  )
}

export default Share

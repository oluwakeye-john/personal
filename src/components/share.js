import React from "react"
import styled from "styled-components"
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaShareAlt,
} from "react-icons/fa"

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
      <ShareLogo>
        <FaShareAlt />
      </ShareLogo>

      <ShareButton as="a" href="/">
        <FaWhatsapp />
      </ShareButton>
      <ShareButton as="a" href="/">
        <FaTwitter />
      </ShareButton>
      <ShareButton as="a" href="/">
        <FaFacebook />
      </ShareButton>
      <ShareButton as="a" href="/">
        <FaLinkedin />
      </ShareButton>
    </div>
  )
}

export default Share

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

const Share = ({ postUrl, desc }) => {
  const text = `${desc}\n\${postUrl}`
  const intent = {
    whatsapp: `https://api.whatsapp.com/send?text=${text}`,
    facebook: `https://facebook.com/sharer/sharer.php?u=${postUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=false&url=${postUrl}&summary=${desc}`,
    twitter: `https://twitter.com/intent/tweet?text=${text}`,
  }
  return (
    <div>
      <ShareLogo>
        <FaShareAlt />
      </ShareLogo>

      <ShareButton as="a" href={intent.whatsapp}>
        <FaWhatsapp />
      </ShareButton>
      <ShareButton as="a" href={intent.twitter}>
        <FaTwitter />
      </ShareButton>
      <ShareButton as="a" href={intent.facebook}>
        <FaFacebook />
      </ShareButton>
      <ShareButton as="a" href={intent.linkedin}>
        <FaLinkedin />
      </ShareButton>
    </div>
  )
}

export default Share

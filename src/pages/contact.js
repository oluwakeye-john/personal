import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import {
  Input,
  InputGroup,
  InputBox,
  InputLabel,
  TextArea,
} from "../components/inputBox"
import SocialButtons from "../components/socialButtons"
import SectionHeading from "../components/sectionHeading"

import { FaPaperPlane, FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const ContactContainer = styled.div`
  margin: 2rem 0;
  max-width: 750px;
  width: 100%;
  padding: 1px;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const ContactText = styled.p`
  margin-bottom: 2rem;
  /* text-align: center; */
  opacity: 0.8;
`

const ContactExtra = styled.p`
  margin-top: 20px;
`

const Contact = ({ data, location }) => {
  const [msg, setMsg] = useState({ status: false, text: "" })
  const siteTitle = data.site.siteMetadata.title

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    e.target.reset()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Contact",
        name,
        email,
        message,
      }),
    })
      .then(resp => {
        console.log(resp.ok)
        setMsg({
          status: true,
          text: "Thanks for filling this form. I will get back to you soon",
        })
      })
      .catch(() => {
        setMsg({
          status: false,
          text: "Error submitting form. Please try again",
        })
      })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Me" />
      <ContactContainer>
        <form onSubmit={handleSubmit} data-netlify="true">
          <SectionHeading>Contact Me</SectionHeading>
          <ContactText>
            Contact me job offers, collaboration and hmm ... Just anything.
            Robots aren't welcome, BTW.
          </ContactText>
          <div style={{ textAlign: "center" }}>
            <SocialButtons darkenOnHover />
          </div>
          <ContactText>Or use the form below</ContactText>
          <InputGroup>
            <Input>
              <InputBox type="text" placeholder=" " required name="name" />
              <InputLabel>Name</InputLabel>
            </Input>
            <Input>
              <InputBox type="email" placeholder=" " required name="email" />
              <InputLabel>Email</InputLabel>
            </Input>
          </InputGroup>
          <TextArea>
            <InputBox
              as="textarea"
              rows="8"
              placeholder=" "
              required
              name="message"
            />
            <InputLabel>Message</InputLabel>
          </TextArea>
          <ButtonWrapper>
            <Button type="submit">
              <FaPaperPlane /> Send message
            </Button>

            {msg.text && (msg.status ? <FaCheckCircle /> : <FaTimesCircle />)}
            <ContactExtra>{msg.text}</ContactExtra>
          </ButtonWrapper>
        </form>
      </ContactContainer>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

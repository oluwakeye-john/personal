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

import { FaPaperPlane } from "react-icons/fa"

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
        if (resp.ok) {
          setMsg({ status: true, text: "Form submmitted" })
        } else {
          setMsg({ status: false, text: "Error submitting form" })
        }
      })
      .catch(() => {
        setMsg({ status: false, text: "Error submitting form" })
      })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Me" />
      <ContactContainer>
        <form onSubmit={handleSubmit}>
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
          <p style={{ color: msg.status ? "green" : "red" }}>{msg.text}</p>
          <ButtonWrapper>
            <Button type="submit">
              <FaPaperPlane /> Send message
            </Button>
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

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import {
  Input,
  InputGroup,
  InputBox,
  InputLabel,
  TextArea,
} from "../components/InputBox"

const ContactContainer = styled.div`
  margin: 2rem 0;
  max-width: 750px;
  width: 100%;
  padding: 1px;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const ContactHeading = styled.h1`
  padding: 0;
  margin: 0;
  /* text-align: center; */
  font-family: arial;
  margin-bottom: 1rem;
`

const ContactText = styled.p`
  margin-bottom: 2rem;
  /* text-align: center; */
  opacity: 0.8;
`

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Me" />
      <ContactContainer>
        <form>
          <ContactHeading>Contact Me</ContactHeading>
          <ContactText>
            Contact me job offers, collaboration and hmm ... Just anything.
            Robots aren't welcome, BTW.
          </ContactText>
          <InputGroup>
            <Input>
              <InputBox type="text" placeholder=" " required />
              <InputLabel>Name</InputLabel>
            </Input>
            <Input>
              <InputBox type="email" placeholder=" " required />
              <InputLabel>Email</InputLabel>
            </Input>
          </InputGroup>
          <TextArea>
            <InputBox as="textarea" rows="8" placeholder=" " required />
            <InputLabel>Message</InputLabel>
          </TextArea>
          <ButtonWrapper>
            <Button type="submit">Send message</Button>
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

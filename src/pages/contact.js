import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

const ContactContainer = styled.div`
  margin: 2rem 0;
  max-width: 750px;
  width: 100%;
  padding: 1px;
`

const InputGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Input = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 47%;
  position: relative;
  margin-bottom: 2rem;
`

const InputBox = styled.input`
  padding: 10px;
  width: 100%;
  &:focus {
    outline: 0;
  }
  &:focus + label {
    transform: translateY(-20px);
  }
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
  }
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textNormal};
`

const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  margin: 4px 10px;
  transition: 0.2s;
  pointer-events: none;
  background-color: ${({ theme }) => theme.bg};
`

const TextArea = styled(Input)`
  width: 100%;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const ContactHeading = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: arial;
  margin-bottom: 2rem;
`

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Me" />
      <ContactContainer>
        <form>
          <ContactHeading>Contact Me</ContactHeading>
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
            <Button type="submit">Submit</Button>
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

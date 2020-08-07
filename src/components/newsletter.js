import React, { useState } from "react"
import { Input, InputBox, InputLabel, InputGroup } from "./inputBox"
import styled from "styled-components"

const FormURL = "https://app.convertkit.com/forms/1581601/subscriptions"

const NewsletterContainer = styled.div`
  /* border: 2px solid ${({ theme }) => theme.primary}; */
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.cardBg};
  @media (max-width: 768px) {
    padding: 1.5rem 1rem ;
  }
`
//Please go confirm your subscription!

const SubscribeButton = styled.button`
  padding: 0.4rem 1.6rem;
  height: auto;
  margin-left: 1rem;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  background: transparent;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`

const Newsletter = () => {
  const [status, setStatus] = useState("")
  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      email_address: e.target.email.value,
    }

    console.log(data)

    fetch(FormURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.status === "success") {
          setStatus("Great. Now confirm your subscription in your mail")
        } else {
          setStatus("An error occured. Please try again")
        }
        console.log(resp)
      })
  }
  return (
    <NewsletterContainer>
      <form onSubmit={handleSubmit}>
        <h2>Join My Newsletter</h2>
        <p>Subscribe to get our latest content by email.</p>

        <p>{status}</p>

        <Input style={{ display: "inline-block" }}>
          <InputBox
            required
            name="email"
            type="email"
            placeholder="Your email address"
          />
          {/* <InputLabel>your email address</InputLabel> */}
        </Input>
        <SubscribeButton type="submit">Subscribe</SubscribeButton>

        <p>
          <small>
            I won't send you spam and you can unsubscribe at any time
          </small>
        </p>
      </form>
    </NewsletterContainer>
  )
}

export default Newsletter

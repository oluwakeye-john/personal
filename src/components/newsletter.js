import React, { useState } from "react"
import { Input, InputBox } from "./inputBox"
import styled from "styled-components"

import { FaTimesCircle, FaCheckCircle } from "react-icons/fa"
import Button from "./button"

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

const SubscribeButton = styled(Button)`
  margin-left: 1rem;
  /* border-radius: 8px; */
`

const Newsletter = () => {
  const [status, setStatus] = useState({ status: false, msg: "" })
  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      email_address: e.target.email.value,
    }

    console.log(data)
    e.target.reset()

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
          setStatus({
            status: true,
            msg: "Great. Now confirm your subscription in your mail",
          })
        } else {
          setStatus({
            status: false,
            msg: "An error occured. Please try again",
          })
        }
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
        setStatus({
          status: false,
          msg: "An error occured. Please try again",
        })
      })
  }
  return (
    <NewsletterContainer>
      <form onSubmit={handleSubmit}>
        <h2>Join My Newsletter</h2>
        <p>Subscribe to get our latest content by email.</p>

        {status.msg && (
          <p>
            {status.status ? <FaCheckCircle /> : <FaTimesCircle />} {status.msg}
          </p>
        )}

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

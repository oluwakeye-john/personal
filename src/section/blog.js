import React from "react"
import { graphql, Link } from "gatsby"

import styled from "styled-components"
import BlogList from "../components/BlogList"
import { CenterButton } from "../components/Button"

const BlogContainer = styled.div`
  margin: 3rem 0;
`

const BlogHeading = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`

const BlogSection = () => {
  return (
    <BlogContainer>
      <BlogHeading>✍ Recent Blogs</BlogHeading>
      <BlogList number={2} />
      <Link to="/blog">
        <CenterButton>View More</CenterButton>
      </Link>
    </BlogContainer>
  )
}
// 🤐😷🤕🤒🤮🤢🤧🥵🥶😴💤😈👿👹👺💩👻💀☠👽🤖🎃😺😸😹😻😼😽🙀😿😾👐🤲🙌👏🙏🤝👍👎👊✊🤛🤜🤞✌🤘🤟👌🤏👈👉👆👇☝✋🤚🖐🖖👋🤙💪🦾🖕✍🤳💅🦵🦿🦶👄🦷👅👂🦻👃👁👀🧠🦴👤👥🗣👶👧🧒👦👩🧑👨👩‍🦱🧑‍🦱👨‍
export default BlogSection

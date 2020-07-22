import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import BlogList from "../components/BlogList"
import { CenterLink } from "../components/Button"
import SectionHeading from "../components/sectionHeading"

const BlogContainer = styled.div`
  margin: 3rem 0;
`

const BlogSection = () => {
  return (
    <BlogContainer>
      <SectionHeading>
        <span aria-hidden>✍</span> Recent Blogs
      </SectionHeading>
      <BlogList number={2} />
      <CenterLink to="/blog">View More</CenterLink>
    </BlogContainer>
  )
}
// 🤐😷🤕🤒🤮🤢🤧🥵🥶😴💤😈👿👹👺💩👻💀☠👽🤖🎃😺😸😹😻😼😽🙀😿😾👐🤲🙌👏🙏🤝👍👎👊✊🤛🤜🤞✌🤘🤟👌🤏👈👉👆👇☝✋🤚🖐🖖👋🤙💪🦾🖕✍🤳💅🦵🦿🦶👄🦷👅👂🦻👃👁👀🧠🦴👤👥🗣👶👧🧒👦👩🧑👨👩‍🦱🧑‍🦱👨‍
export default BlogSection

import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import BlogList from "../components/BlogList"
import { CenterButton } from "../components/Button"
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
      <Link to="/blog">
        <CenterButton>View More</CenterButton>
      </Link>
    </BlogContainer>
  )
}
// 🤐😷🤕🤒🤮🤢🤧🥵🥶😴💤😈👿👹👺💩👻💀☠👽🤖🎃😺😸😹😻😼😽🙀😿😾👐🤲🙌👏🙏🤝👍👎👊✊🤛🤜🤞✌🤘🤟👌🤏👈👉👆👇☝✋🤚🖐🖖👋🤙💪🦾🖕✍🤳💅🦵🦿🦶👄🦷👅👂🦻👃👁👀🧠🦴👤👥🗣👶👧🧒👦👩🧑👨👩‍🦱🧑‍🦱👨‍
export default BlogSection

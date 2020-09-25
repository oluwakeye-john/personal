import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionHeading from "../components/sectionHeading"

// const texts = [
//   "Redux",
//   "GraphQL",
//   "Styled Components",
//   "Socket IO",
//   "Django",
//   "Web RTC",
//   "SQL",
//   "Babel",
//   "SASS",
// ]

const SkillContainer = styled.div`
  margin: 3rem 0;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

const Item = styled.div`
  position: relative;
  margin: 1.2rem 1.2rem;
`

const ItemImage = styled(Img)`
  border-radius: 50%;
  transition: 0.3s;
  z-index: 2;

  &:hover {
    transform: translateY(-40px);
    border: 0;
    outline: 0;
    opacity: 0.5;
  }

  &:hover + label {
    opacity: 1;
  }
`

const ItemLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px 0;
  width: 100px;
  text-align: center;
  font-weight: bold;
  opacity: 0;
`

const SkillInfo = styled.p`
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    &::before {
      content: "Click ";
    }
  }
  @media (min-width: 768px) {
    &::before {
      content: "Hover ";
    }
  }
`

const Skill = () => {
  const data = useStaticQuery(graphql`
    fragment squareImage on File {
      childImageSharp {
        fixed(width: 400, height: 400, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query SkillQuery {
      react: file(relativePath: { eq: "skills/react.png" }) {
        ...squareImage
      }
      html: file(relativePath: { eq: "skills/html.png" }) {
        ...squareImage
      }
      nodejs: file(relativePath: { eq: "skills/nodejs.jpg" }) {
        ...squareImage
      }
      css: file(relativePath: { eq: "skills/css.png" }) {
        ...squareImage
      }
      gatsby: file(relativePath: { eq: "skills/gatsbyjs.jpg" }) {
        ...squareImage
      }
      javascript: file(relativePath: { eq: "skills/javascript.jpg" }) {
        ...squareImage
      }
      express: file(relativePath: { eq: "skills/expressjs.jpg" }) {
        ...squareImage
      }
      mongo: file(relativePath: { eq: "skills/mongodb.jpg" }) {
        ...squareImage
      }
      typescript: file(relativePath: { eq: "skills/typescript.png" }) {
        ...squareImage
      }
      scss: file(relativePath: { eq: "skills/sass.png" }) {
        ...squareImage
      }
      next: file(relativePath: { eq: "skills/next.png" }) {
        ...squareImage
      }
      native: file(relativePath: { eq: "skills/native.png" }) {
        ...squareImage
      }
      git: file(relativePath: { eq: "skills/git2.png" }) {
        ...squareImage
      }
      redux: file(relativePath: { eq: "skills/Redux.png" }) {
        ...squareImage
      }
    }
  `)
  return (
    <SkillContainer>
      <SectionHeading>
        <span aria-hidden>✨</span> My Skills
      </SectionHeading>
      <SkillInfo> to see name</SkillInfo>
      <SkillList>
        <Item>
          <ItemImage
            fixed={data.react.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for react"
          />
          <ItemLabel>React Native</ItemLabel>
        </Item>

        <Item>
          <ItemImage
            fixed={data.scss.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for SCSS"
          />
          <ItemLabel>SCSS</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.next.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Nextjs"
          />
          <ItemLabel>Next JS</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.git.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Git"
          />
          <ItemLabel>Git</ItemLabel>
        </Item>

        <Item>
          <ItemImage
            fixed={data.typescript.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Typescript"
          />
          <ItemLabel>Typescript</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.nodejs.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Node JS"
          />
          <ItemLabel>Node JS</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.gatsby.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Gatsby"
          />
          <ItemLabel>Gatsby JS</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.redux.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Redux"
          />
          <ItemLabel>Redux</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.mongo.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for mongo db"
          />
          <ItemLabel>Mongo DB</ItemLabel>
        </Item>
        {/* <Item>
          <ItemImage
            fixed={data.express.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for express js"
          />
          <ItemLabel>Express JS</ItemLabel>
        </Item> */}
      </SkillList>
    </SkillContainer>
  )
}

//background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 100%);
export default Skill

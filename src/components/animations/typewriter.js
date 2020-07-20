import React, { Component } from "react"
import styled from "styled-components"

// const texts = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "NodeJS",
//   "GraphQL",
//   "Styled Components",
//   "Socket IO",
// ]

const Cursor = styled.span`
  animation-name: cursor;
  animation-iteration-count: infinite;
  animation-delay: 1s;
  animation-duration: 0.8s;
  animation-timing-function: linear;

  @keyframes cursor {
    0% {
      color: transparent;
    }
    50% {
      color: ${({ theme }) => theme.navbarLink};
    }
    100% {
      color: transparent;
    }
  }
`

const period = 2500
const interval = 100

class TypeWriter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.texts[0],
      count: 0,
      shown: "",
    }
  }

  rotateText = () => {
    const count = this.state.count
    this.setState({
      text: this.props.texts[(count + 1) % this.props.texts.length],
      count: count + 1,
    })
  }

  write = () => {
    const { text, shown } = this.state
    if (text !== shown) {
      this.setState({
        shown: text.substring(0, shown.length + 1),
      })
      setTimeout(this.write, interval)
    } else {
      setTimeout(this.clear, period)
    }
  }

  refresh = () => {
    this.rotateText()
    this.write()
  }

  clear = () => {
    const { shown } = this.state
    if (shown !== "") {
      this.setState({
        shown: shown.substring(0, shown.length - 1),
      })
      setTimeout(this.clear, interval)
    } else {
      this.refresh()
    }
  }

  componentDidMount() {
    setTimeout(this.write, 1500)
  }

  render() {
    return (
      <>
        <span>{this.state.shown}</span>
        <Cursor> |</Cursor>
      </>
    )
  }
}

export default TypeWriter

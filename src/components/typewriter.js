import React, { Component } from "react"

class TypeWriter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: "",
      interval: 1000,
      count: 0,
      text: this.props.text,
    }
  }

  handle = () => {
    let interval = setInterval(() => {
      const text = this.state.text
      const { shown, count } = this.state
      if (text.length !== shown.length) {
        const { shown, count } = this.state
        this.setState({
          shown: shown + text[count],
          count: count + 1,
        })
      } else {
        clearInterval(interval)
      }
    }, 150)
  }

  componentDidMount() {
    this.handle()
  }
  render() {
    return (
      <span>
        {`${this.state.shown}`} <span style={{ color: "grey" }}>|</span>
      </span>
    )
  }
}

export default TypeWriter

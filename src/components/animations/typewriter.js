import React, { Component } from "react"

const texts = ["Hi there", "Hello world", "Hey there", "Hola!"]

let generalInterval, localInterval1, localInterval2
class TypeWriter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: "",
      text: texts[0],
      prog: 0,
      tog: 0,
    }
  }

  changeText = () => {
    this.setState({
      text: texts[this.state.prog % texts.length],
      prog: this.state.prog + 1,
    })
  }

  writeText = () => {
    localInterval1 = setInterval(() => {
      const { shown, text } = this.state
      if (text.length !== shown.length) {
        const n = text[shown.length]
        if (n !== undefined) {
          this.setState({
            shown: shown + text[shown.length],
          })
        } else {
          this.setState({
            shown: "",
          })
        }
      } else {
        clearInterval(localInterval1)
      }
    }, 150)
  }

  clearText = () => {
    localInterval2 = setInterval(() => {
      const { shown } = this.state
      if (shown.length) {
        this.setState({
          shown: shown.slice(0, shown.length - 1),
        })
      } else {
        this.setState({
          shown: "",
        })
        clearInterval(localInterval2)
        this.writeText()
      }
    }, 150)
  }

  handle = () => {
    this.clearText()
    this.changeText()
  }

  componentDidMount() {
    this.handle()
    generalInterval = setInterval(() => {
      this.handle()
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(generalInterval)
    clearInterval(localInterval1)
    clearInterval(localInterval2)
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

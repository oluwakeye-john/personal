import React, { useState, useEffect, Component } from "react"

// const TypeWriter = ({ text }) => {
//   const [shown, setShown] = useState("")

//   let interval
//   let count = 0
//   useEffect(() => {
//     setInterval(() => {
//       if (shown !== text) {
//         console.log(shown + text[count])
//         setShown(shown + text[count])
//         count += 1
//       } else {
//         clearInterval(interval)
//       }
//     }, 1000)
//   }, [])
//   return <p>{shown}</p>
// }

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
    // const text = this.state.text
    let interval = setInterval(() => {
      const text = this.state.text
      const { shown, count } = this.state
      if (text.length !== shown.length) {
        const { shown, count } = this.state
        // console.log(shown + text[count])
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

import React, { Component } from 'react'
import "./Counter.css"

export default class Counter extends Component {

  state = {
    counter: 0,
    isVisible: true,
  }

  plusCount = () => {
    let { counter } = this.state;

    this.setState({
      counter: ++counter,
    })
  }

  minusCount = () => {
    let { counter } = this.state;

    this.setState({
      counter: --counter,
    })
  }

  handleToggleCounter = () => {
    let { isVisible } = this.state;

    this.setState({
      isVisible: !isVisible,
    })
  }

  render() {
    const { counter, isVisible } = this.state

    return (
      <>
        <h1>{isVisible ? counter : null}</h1>
        <div className="buttons">
        <button onClick={this.plusCount}>+</button>
        <button onClick={this.minusCount}>-</button>
        <button onClick={this.handleToggleCounter}>{isVisible ? "Hide" : "Show"}</button>
        </div>
        <p>{isVisible && counter === 10 ? "Ты красавчик" : null}</p>
      </>
    )
  }
}

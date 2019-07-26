import React, { Component } from 'react'
import "./Counter.css"
import Button from './Button'
import Message from './Message';

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
        <Button title='+' onClick={this.plusCount} />
        <Button title='-' onClick={this.minusCount} />
        <Button title={isVisible ? "Hide" : "Show"} onClick={this.handleToggleCounter} />
        </div>
        <Message title={isVisible && counter === 10 ? "Ты красавчик" : null} />
        

      </>
    )
  }
}

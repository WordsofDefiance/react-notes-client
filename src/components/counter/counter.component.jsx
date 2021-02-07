import React from "react"
import { Button } from '../button/Button.component'
import { Link } from 'react-router-dom'

class Counter extends React.Component {
  constructor () {
      super()
      this.state = { value: ''}
  }

  addOne = () => {
    this.setState({value: this.state.value + 1})
  }

  subtractOne = () => {
      this.setState({value: this.state.value - 1})
  }

  async getCounterValue() {
    const value = await fetch(`/api/get_counter`, {})
        .then((res) => res.json())
        .catch((error) => console.log(error));
    return value;
  }

  async componentDidMount() {
    const value = await this.getCounterValue()
    this.setState({value: value[0].value});
  }

  async componentWillUnmount() {
    const value = this.state.value;
    fetch(`/api/set_counter/`, {
        method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                value: value
            })
    })
    .then( (response) => { 
        console.log(response)
    });
  }

  render() {
    return (
        <>
        <h1>Hello</h1>
        <p>The purpose of this page was to figure out how to persist data between pages of a react app.</p>
        <p>My solution is to store the counter value in a database, so leaving the page doesn't reset the value.</p>
        <h3>Counter value is: {this.state.value}</h3>
        <Button onClick={this.addOne}>Add one to counter</Button>
        <Button onClick={this.subtractOne}>Subtract one from counter</Button>
        <Link to='/'>Go Home</Link>
        </>
    )
  }
}

export default Counter
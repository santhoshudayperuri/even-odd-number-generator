// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  onGen = () => {
    this.setState({num: Math.round(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="box">
        <h1>Count {num}</h1>
        {num % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
        <div>
          <button onClick={this.onGen}>Increment</button>
        </div>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp

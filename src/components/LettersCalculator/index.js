import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: 0,
  }

  onLettersCount = event => {
    this.setState({
      searchInput: event.target.value.length,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="words-container">
          <h1 className="heading">
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <label className="para" htmlFor="input">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            className="input"
            id="input"
            onChange={this.onLettersCount}
          />

          <p className="show">No.of letters: {searchInput}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirst = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onLast = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName} = this.state
    const {isLastName} = this.state
    return (
      <div className="container">
        <div className="bg-con">
          <h1>Show/Hide</h1>

          <div className="bg">
            <div>
              <button className="btn" type="button" onClick={this.onFirst}>
                Show/Hide Firstname
              </button>
              {isFirstName && <p className="para">Joe </p>}
            </div>
            <div>
              <button className="btn" type="button" onClick={this.onLast}>
                Show/Hide Lastname
              </button>
              {isLastName && <p className="para">Jonas </p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

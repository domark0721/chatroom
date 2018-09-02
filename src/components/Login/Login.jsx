import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  inputNameHandler = (e) => {
    const { value } = e.target
    this.setState({
      name: value,
    })
  }

  submitUserName = () => {
    const { setUserName } = this.props
    const { name } = this.state
    setUserName(name)
  }

  keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      this.submitUserName()
      this.setState({ userMsg: '' })
    }
  }

  render() {
    const { name } = this.state
    return (
      <div className={styles.loginWrap}>
        <div className={styles.welcome}>
          Welcome to Chatroom!
        </div>
        <div className={styles.title}>
          Enter your name
        </div>
        <input
          type="text"
          className={styles.inputName}
          onChange={this.inputNameHandler}
          value={name}
          onKeyDown={this.keyDownHandler}
        />
        <button
          type="button"
          className={styles.submitBtn}
          onClick={this.submitUserName}
          disabled={name.length === 0}
        >
          Submit
        </button>
      </div>
    )
  }
}

Login.propTypes = {
  setUserName: PropTypes.func.isRequired,
}

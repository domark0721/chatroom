import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './InputMsgBox.scss'


export default class InputMsgBox extends Component {
  state = {
    userMsg: '',
  }

  inputMsgHandler = (e) => {
    const { value } = e.target
    this.setState({
      userMsg: value,
    })
  }

  sendMsgHandler = () => {
    const { sendMsg } = this.props
    const { userMsg } = this.state
    sendMsg(userMsg)
  }

  render() {
    const { userMsg } = this.state
    return (
      <div className={styles.InputMsgBoxWrap}>
        <input
          className={styles.msgInput}
          onChange={this.inputMsgHandler}
          value={userMsg}
        />
        <button
          type="button"
          className={styles.sendBtn}
          onClick={this.sendMsgHandler}
          disabled={userMsg.length === 0}
        >
          Enter
        </button>
      </div>
    )
  }
}


InputMsgBox.propTypes = {
  sendMsg: PropTypes.func.isRequired,
}

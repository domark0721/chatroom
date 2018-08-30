import React, { Component } from 'react'
import styles from './Login.scss'

export default class Login extends Component {
  render() {
    return (
      <div className={styles.loginWrap}>
        <div className={styles.welcome}>
          Welcome to Chatroom!
        </div>
        <div className={styles.title}>
          Enter your name
        </div>
        <input className={styles.inputName} type="text" />
        <button type="button" className={styles.submitBtn}>
          Submit
        </button>
      </div>
    )
  }
}

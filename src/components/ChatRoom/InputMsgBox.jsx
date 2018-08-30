import React, { Component } from 'react'

import styles from './InputMsgBox.scss'


export default class InputMsgBox extends Component {
  render() {
    return (
      <div className={styles.InputMsgBoxWrap}>
        <input className={styles.msgInput} />
        <button type="button" className={styles.enterBtn}>
          Enter
        </button>
      </div>
    )
  }
}

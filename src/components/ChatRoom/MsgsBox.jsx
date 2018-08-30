import React, { Component } from 'react'

import InputMsgBox from './InputMsgBox'
import styles from './MsgsBox.scss'

export default class MessagesBox extends Component {
  render() {
    return (
      <div className={styles.messagesBoxWrap}>
        <ul className={styles.msglist}>
          <li><span>Hello!</span></li>
          <li><span>Good morning!</span></li>
        </ul>
        <InputMsgBox />
      </div>
    )
  }
}

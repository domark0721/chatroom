import React, { Component } from 'react'

import styles from './MessagesBox.scss'


export default class MessagesBox extends Component {
  render() {
    return (
      <div className={styles.messagesBoxWrap}>
        <ul>
          <li>Hello!</li>
          <li>Good morning!</li>
        </ul>
      </div>
    )
  }
}

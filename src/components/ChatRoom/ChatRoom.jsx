import React, { Component } from 'react'

import OnlineUsers from './OnlineUsers'
import MessagesBox from './MessagesBox'
import styles from './ChatRoom.scss'


export default class ChatRoom extends Component {
  render() {
    return (
      <div className={styles.chatRoomWrap}>
        <div className={styles.leftSide}>
          <OnlineUsers />
        </div>
        <div className={styles.rightSide}>
          <MessagesBox />
        </div>
      </div>
    )
  }
}

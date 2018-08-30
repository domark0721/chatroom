import React, { Component } from 'react'

import OnlineUsers from './OnlineUsers'
import MsgsBox from './MsgsBox'
import styles from './ChatRoom.scss'


export default class ChatRoom extends Component {
  render() {
    return (
      <div className={styles.chatRoomWrap}>
        <div className={styles.leftSide}>
          <OnlineUsers />
        </div>
        <div className={styles.rightSide}>
          <MsgsBox />
        </div>
      </div>
    )
  }
}

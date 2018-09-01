import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OnlineUsers from './OnlineUsers'
import MsgsBox from './MsgsBox'
import styles from './ChatRoom.scss'


export default class ChatRoom extends Component {
  render() {
    const { user, sendMsg, msg } = this.props
    return (
      <div className={styles.chatRoomWrap}>
        <div className={styles.leftSide}>
          <OnlineUsers userName={user.name} />
        </div>
        <div className={styles.rightSide}>
          <MsgsBox
            sendMsg={sendMsg}
            userName={user.name}
            msg={msg}
          />
        </div>
      </div>
    )
  }
}

ChatRoom.propTypes = {
  user: PropTypes.object.isRequired,
  sendMsg: PropTypes.func.isRequired,
  msg: PropTypes.object.isRequired,
}

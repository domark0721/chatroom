import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OnlineUsers from './OnlineUsers'
import MsgsBox from './MsgsBox'
import styles from './ChatRoom.scss'

import { firebaseRealTimeUpdate } from '../../lib/firebaseAPI'

export default class ChatRoom extends Component {
  componentDidMount() {
    const { fetchMsgList, receiveRealTimeMsgList } = this.props
    /* get the msg list first time */
    fetchMsgList()
    /* listen the msg list changed */
    firebaseRealTimeUpdate(receiveRealTimeMsgList)
  }

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
  msg: PropTypes.object.isRequired,
  sendMsg: PropTypes.func.isRequired,
  fetchMsgList: PropTypes.func.isRequired,
  receiveRealTimeMsgList: PropTypes.func.isRequired,
}

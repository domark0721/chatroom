import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

import InputMsgBox from './InputMsgBox'
import styles from './MsgsBox.scss'

export default class MsgBox extends Component {
  render() {
    const { sendMsg, userName, msg } = this.props
    return (
      <div className={styles.MsgBoxWrap}>
        <ul className={styles.msglist}>
          {
            msg.msgList.map(item => (
              <li
                key={item.id}
                className={classnames({
                  [styles.myself]: item.name === userName,
                })}
              >
                {
                  item.name !== userName
                  && <span className={styles.sender}>{`${item.name} (${moment(item.timeStamp).format('MM/DD HH:mm')})`}</span>
                }
                {
                  item.name === userName
                  && <span className={styles.sender}>{`(${moment(item.timeStamp).format('MM/DD HH:mm')})`}</span>
                }
                <span className={classnames([styles.msgBubble], {
                  [styles.myBubble]: item.name === userName,
                  [styles.senderBubble]: item.name !== userName,
                })}
                >
                  {item.msg}
                </span>
              </li>
            ))
          }
        </ul>
        <InputMsgBox
          sendMsg={sendMsg}
        />
      </div>
    )
  }
}

MsgBox.propTypes = {
  sendMsg: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  msg: PropTypes.object.isRequired,
}

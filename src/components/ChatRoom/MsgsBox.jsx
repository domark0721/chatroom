import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import InputMsgBox from './InputMsgBox'
import styles from './MsgsBox.scss'

export default class MsgBox extends Component {
  render() {
    const { sendMsg, userName, msg } = this.props
    return (
      <div className={styles.MsgBoxWrap}>
        <ul className={styles.msglist}>
          {
            msg.data.map(item => (
              <li
                className={classnames({
                  [styles.myself]: item.name === userName,
                })}
              >
                {
                  item.name !== userName
                  && <span className={styles.sender}>{item.name}</span>
                }
                <span className={styles.msgBubble}>
                  {item.msg}
                </span>
              </li>
            ))
          }
        </ul>
        <InputMsgBox
          sendMsg={sendMsg}
          userName={userName}
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

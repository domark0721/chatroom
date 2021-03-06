import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './OnlineUsers.scss'


export default class OnlineUsers extends Component {
  render() {
    const { userName } = this.props
    return (
      <div className={styles.onlineUsersWrap}>
        <div className={styles.yourNameWrap}>
          Your Name is
          <span className={styles.name}>{userName}</span>
        </div>
        {/* <h1>Online User List</h1>
        <div className={styles.listWrap}>
          <ul>
            <li>Cindy</li>
            <li>Amy</li>
          </ul>
        </div> */}
      </div>
    )
  }
}


OnlineUsers.propTypes = {
  userName: PropTypes.string.isRequired,
}

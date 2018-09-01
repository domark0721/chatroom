import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatRoom from '../ChatRoom'
import Login from '../Login'
import styles from './App.scss'


export default class App extends Component {
  render() {
    const { setUserName, user } = this.props
    return (
      <div className={styles.appWrap}>
        {
          user.isLogin
            ? <ChatRoom />
            : <Login setUserName={setUserName} />
        }
      </div>
    )
  }
}

App.propTypes = {
  setUserName: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

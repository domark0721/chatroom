import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatRoom from '../ChatRoom'
import Login from '../Login'
import styles from './App.scss'


export default class App extends Component {
  render() {
    const { setUserName } = this.props
    return (
      <div className={styles.appWrap}>
        <Login setUserName={setUserName} />
        <ChatRoom />
      </div>
    )
  }
}

App.propTypes = {
  setUserName: PropTypes.func.isRequired,
}

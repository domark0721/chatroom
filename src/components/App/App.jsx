import React, { Component } from 'react'

import Login from '../Login'
import styles from './App.scss'


export default class App extends Component {
  render() {
    return (
      <div className={styles.appWrap}>
        <Login />
      </div>
    )
  }
}

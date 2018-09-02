import firebase from 'firebase'

import { Types } from '../reducers/msg'
import { firebaseGetMsg, firebaseSendMsg } from '../lib/firebaseAPI'

const fetchMsgListStart = () => ({
  type: Types.FETCH_MSG_LIST_START,
})

const fetchMsgListRecevied = data => ({
  type: Types.RECEIVE_MSGS_LIST,
  data,
})

export const receiveRealTimeMsgList = diffMsg => ({
  type: Types.RECEIVE_REAL_TIME_MSG_LIST,
  diffMsg,
})

export const fetchMsgList = () => (dispatch) => {
  dispatch(fetchMsgListStart())
  firebaseGetMsg()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      dispatch(fetchMsgListRecevied(data))
    })
}

const sendMsgStart = () => ({
  type: Types.SEND_MSG_START,
})

const sendMsg = msg => (dispatch, getState) => {
  dispatch(sendMsgStart())
  const { user } = getState()
  const data = {
    msg,
    name: user.name,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  }
  firebaseSendMsg(data)
    .then((docRef) => {
      // fufilled
      // console.log('Document written with ID: ', docRef.id)
    })
    .catch((error) => {
      // rejected
      // console.log('Error adding document: ', error)
    })
}

export default sendMsg

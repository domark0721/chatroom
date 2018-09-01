import { Types } from '../reducers/msg'


const fetchMsgListStart = () => ({
  type: Types.FETCH_MSG_LIST_START,
})

const fetchMsgListRecevived = () => ({
  type: Types.RECEIVE_MSGS_LIST,
})

export const fetchMsgList = () => (dispatch) => {
  dispatch(fetchMsgListStart())
}

const sendMsgStart = () => ({
  type: Types.SEND_MSG_START,
})

const sendMsg = () => (dispatch) => {
  dispatch(sendMsgStart())
}

export default sendMsg

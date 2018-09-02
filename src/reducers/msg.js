
export const Types = {
  FETCH_MSG_LIST_START: 'msg/fetch_msg_list_start',
  RECEIVE_MSGS_LIST: 'msg/receive_msg_list',
  SEND_MSG_START: 'msg/send_msg_start',
  SEND_MSG: 'msg/send_msg',
  RECEIVE_REAL_TIME_MSG_LIST: 'msg/receive_real_time_msg_list',
}

const initialState = {
  isFetching: false,
  msgList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_MSG_LIST_START:
      return {
        ...state,
        isFetching: true,
      }
    case Types.RECEIVE_MSGS_LIST:
      return {
        ...state,
        isFetching: false,
        msgList: action.data,
      }
    case Types.RECEIVE_REAL_TIME_MSG_LIST:
      return {
        ...state,
        isFetching: false,
        msgList: action.diffMsg,
      }
    default:
      return state
  }
}

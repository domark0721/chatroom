
export const Types = {
  FETCH_MSG_LIST_START: 'msg/fetch_msg_list_start',
  RECEIVE_MSGS_LIST: 'msg/receive_msg_list',
  SEND_MSG_START: 'msg/send_msg_start',
  SEND_MSG: 'msg/send_msg',
}

const initialState = {
  isFetching: false,
  data: [
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
    { name: 'mark', msg: 'Hi', timeStamp: '123' },
    { name: 'jason', msg: 'oh No', timeStamp: '123' },
    { name: 'mark', msg: 'Good morning!', timeStamp: '123' },
  ],
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
        date: action.data,
      }
    default:
      return state
  }
}

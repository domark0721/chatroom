import { connect } from 'react-redux'

import ChatRoom from '../components/ChatRoom'
import sendMsg, { fetchMsgList } from '../actions/msg'

const mapStateToProps = ({ user, msg }) => ({
  user,
  msg,
})


const mapDispatchToProps = dispatch => ({
  sendMsg: (name, msg) => dispatch(sendMsg(name, msg)),
  fetchMsgList: () => dispatch(fetchMsgList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatRoom)

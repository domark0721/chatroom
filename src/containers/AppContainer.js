import { connect } from 'react-redux'

import App from '../components/App'
import setUserName from '../actions/user'

const mapStateToProps = ({ user }) => ({
  user,
})


const mapDispatchToProps = dispatch => ({
  setUserName: userName => dispatch(setUserName(userName)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

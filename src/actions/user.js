import { Types } from '../reducers/user'

const setUserName = name => ({
  type: Types.SET_USER_NAME,
  name,
})


export default setUserName

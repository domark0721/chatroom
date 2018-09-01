import { Types } from '../reducers/users'

const setUserName = name => ({
  type: Types.SET_USER_NAME,
  name,
})


export default setUserName


export const Types = {
  SET_USER_NAME: 'users/set_user_name',
}

const initialState = {
  name: '',
  isLogin: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_USER_NAME:
      return {
        name: action.name,
        isLogin: true,
      }
    default:
      return state
  }
}

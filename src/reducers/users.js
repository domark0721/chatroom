
export const Types = {
  SET_USER_NAME: 'users/set_user_name',
}


export default (state = {}, action) => {
  switch (action.type) {
    case Types.SET_USER_NAME:
      return {
        name: action.name,
      }
    default:
      return state
  }
}

import { SET_USER, CLEAR_USER, USER_LOCATION } from '../action/action'

const emptyUser = {
  longitude: null,
  latitude: null
}

const user = (state = emptyUser, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user

    case CLEAR_USER:
      return emptyUser

    case USER_LOCATION:
    {
      const latitude = action.location.latitude
      const longitude = action.location.longitude
      return {
        ...state,
        latitude,
        longitude
      }
    }

    default:
      return state
  }
}

export default user
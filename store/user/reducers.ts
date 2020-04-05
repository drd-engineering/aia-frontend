import { ADD_SIGNATURE, CONFIRM_DETAIL, UserState } from './types'
  
  const initialState: UserState = {
    name: "",
    ktp_id: "",
    address: "",
    birthdate: 0,
    signature: {
        filename: "",
        timestamp: 0
    }
  }
  
  export function chatReducer(
    state = initialState,
    action: UserActionTypes
  ): UserState {
    switch (action.type) {
      case CONFIRM_DETAIL:
        return {
            ...state,
            ...action.payload
        }
      case ADD_SIGNATURE:
        return {
            ...state,
            ...action.payload
        }
      default:
        return state
    }
  }
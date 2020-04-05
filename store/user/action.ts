import { ADD_SIGNATURE, CONFIRM_DETAIL, Signature, UserActionTypes, UserState } from "./types"

// TypeScript infers that this function is returning SendMessageAction
export function ConfirmDetailAction(newUserState: UserState): UserActionTypes {
  return {
    type: CONFIRM_DETAIL,
    payload: newUserState
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function AddSignatureAction(newSignature: Signature, timestamp: number): UserActionTypes {
  return {
    type: ADD_SIGNATURE,
    payload: newSignature,
    meta: {
        timestamp
      }
  }
}

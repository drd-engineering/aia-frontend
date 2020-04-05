export interface Signature{
    filename: string
    timestamp: number
}

export interface UserState {
    name: string
    ktp_id: string
    address: string
    birthdate: number
    signature: Signature
  }
}

export const CONFIRM_DETAIL = 'CONFIRM_DETAIL'
export const ADD_SIGNATURE = 'ADD_SIGNATURE'

interface ConfirmDetailAction {
  type: typeof CONFIRM_DETAIL
  payload: UserState
}

interface AddSignatureAction {
  type: typeof ADD_SIGNATURE
  payload: Signature
  meta: {
    timestamp: number
  }
}

export type UserActionTypes = ConfirmDetailAction | AddSignatureAction
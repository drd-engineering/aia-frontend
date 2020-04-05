export interface SystemState {
    startedAt: number
    duration: number
    sessiontoken: string
    userName: string
  }
  
  export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction
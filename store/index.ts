import { systemReducer } from './system/reducers'
import { chatReducer } from './user/reducers'

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>
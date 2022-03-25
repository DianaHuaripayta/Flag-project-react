import { combineReducers } from '@reduxjs/toolkit'
import { createStore } from 'redux'
const initialState = { 
  countryList: []
}

function reducer (state: any, action: any) {
  console.log(action, 'action')
  switch (action.type) {
    case 'SET_COUNTRY_LIST': 
      return {...state, countryList:action.payload  }//el nuevo estado - es decir lo mute
    default:
      return state
  }
}
export const rootReducer = combineReducers({
  countryList: reducer,
});

export const store = createStore(reducer, initialState)
export type RootState = ReturnType<typeof rootReducer>





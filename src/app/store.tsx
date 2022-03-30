import { combineReducers } from '@reduxjs/toolkit'
import { createStore } from 'redux'
const initialState = { 
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}

function reducer (state: any = initialState, action: any) {
  console.log(action, 'action')
  switch (action.type) {
    case 'SET_COUNTRY_LIST': 
      return {...state, countryList:action.payload  }//el nuevo estado - es decir lo mute
    case 'SET_COUNTRY_BY_NAME': {
      let list
      if (state.filterByRegion !== '') {
        list = state.coutryFilteredByRegion
      } else {
        list = state.countryList
      }
      const countryListByName = list.filter((country: { name: string }) => country.name.toLowerCase().includes(action.payload.toLowerCase()))
      return { ...state, countryListByName }
    }
    default:
      return state
  }
}
const allReducers = combineReducers({
  countryListByName: reducer,
  filterByRegion: reducer,
  coutryFilteredByRegion: reducer,
  countryList: reducer,
});
export default allReducers;
export const store = createStore(reducer, initialState)
export type State = ReturnType<typeof allReducers>;
// export const rootReducer = combineReducers({
//   countryList: reducer,
//   countryListByName: reducer,
// });

// export const store = createStore(reducer, initialState)
// export type RootState = ReturnType<typeof rootReducer>







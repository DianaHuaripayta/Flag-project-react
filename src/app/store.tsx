import React from 'react'

export default function store() {
  return (
    <div>store</div>
  )
}

// import { combineReducers } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
// import reducer from './store'
// export const initialState = { 
//   countryList: [],
//   countryListByName: [],
//   coutryFilteredByRegion: [],
//   filterByRegion: '',
// }

// const allReducers = combineReducers({
//   countryListByName: reducer,
//   filterByRegion: reducer,
//   coutryFilteredByRegion: reducer,
//   countryList: reducer,
// });
// export default allReducers;
// export const store = createStore(reducer, initialState)
// export type State = ReturnType<typeof allReducers>;


// export const rootReducer = combineReducers({
//   countryList: reducer,
//   countryListByName: reducer,
// });

// export const store = createStore(reducer, initialState)
// export type RootState = ReturnType<typeof rootReducer>







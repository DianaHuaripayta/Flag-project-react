import React from 'react'

export default function reducers() {
  return (
    <div>reducers</div>
  )
}

// import { Action } from './actions'
// import { ActionType } from './types'
// import { initialState } from './store'
// export default function reducer (state: any = initialState, action: Action) {
//     console.log(action, 'action')
//     switch (action.type) {
//       case ActionType.SET_COUNTRY_LIST: 
//         return {...state, countryList:action.payload  }//el nuevo estado - es decir lo mute
  
//       case ActionType.SET_COUNTRY_BY_NAME: {
//         let list
//         if (state.filterByRegion !== '') {
//           list = state.coutryFilteredByRegion
//         } else {
//           list = state.countryList
//         }
//         const countryListByName = list.filter((country: { name: string }) => country.name.toLowerCase().includes(action.payload.toLowerCase()))
//         return { ...state, countryListByName }
//       }
//       case ActionType.FILTER_BY_REGION: {
//         const {regionSelected} = action.payload;
        
//         if (''=== regionSelected) {
//           return{...state, coutryFilteredByRegion:[], filterByRegion:regionSelected}
//         }
//         const countryFilteredByRegion = state.countryList.filter((country: { region: any }) => country.region === regionSelected)
//         return{...state, countryFilteredByRegion, filterByRegion: regionSelected}
//       }
      
//       default:
//         return state
//     }
//   }
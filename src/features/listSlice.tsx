import { createSlice } from "@reduxjs/toolkit";
interface countriesState {
    countryList: any,
    countryListByName: any,
    countryFilteredByRegion: any,
    filterByRegion: String,
}
  
  // Define the initial state using that type
const initialState: countriesState = {
    countryList: [],
    countryListByName: [],
    countryFilteredByRegion: [],
    filterByRegion: '',
}

const countrySlices = createSlice({
    name: 'listsCountries',
    initialState,

    reducers:{
        setCountryList:(state, action) =>{
            state.countryList = action.payload
        },
        setCountryByName:(state, action) =>{
            let list
            if (state.filterByRegion !== '') {
                list = state.countryFilteredByRegion
            } else {
                list = state.countryList
            }
            const countryListByName = list.filter((country: { name: string }) => country.name.toLowerCase().includes(action.payload.toLowerCase()))
            return { ...state, countryListByName }
        },
        setFilterByRegion:(state, action) =>{
            const { regionSelected } = action.payload ;

            if ('' === regionSelected) {
                // state.countryFilteredByRegion: [];
                // state.filterByRegion: '';
                 return { ...state, countryFilteredByRegion: [], filterByRegion: '', };
            }

            const countryFilteredByRegion = state.countryList.filter((country: { region: any; }) => country.region === regionSelected);

            return { ...state, countryFilteredByRegion, filterByRegion: regionSelected }
        }
    }
})
export const { setCountryList, setCountryByName, setFilterByRegion } = countrySlices.actions;
export default countrySlices.reducer
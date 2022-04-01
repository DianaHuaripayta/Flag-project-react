import { createSlice } from "@reduxjs/toolkit";
export interface CatItem{
    name: any,
    countryList: any,
}
const initialState: CatItem[]=[];

const countrySlices = createSlice({
    name: 'cats',
    initialState:{
        listCountry: initialState
    },

    reducers:{
        setCountryList:(state, action) =>{
            state.listCountry = action.payload
        }
    }
})
export const { setCountryList } = countrySlices.actions;
export default countrySlices.reducer
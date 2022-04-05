import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCountryList } from '../../features/listSlice';
import CardsCountry from './CardsCountry';

const WrapperCardStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    max-width: 1138px;  
    padding: 1em 1em;
`;
export default function Country() {

const dispatch = useAppDispatch();
const axios = require('axios');
const countryListByName = useAppSelector(state => state.countryListByName)


useEffect(()=>{
  // Make a request for a user with a given ID
   axios.get('https://restcountries.com/v2/all')
    .then((response: any) => {
      // handle success
      dispatch(setCountryList(response.data))
    })
    .catch((error: any) =>  {
      // handle error
      console.log(error);
    })
},[dispatch])

  const countryList = useAppSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.countryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName
    }
    return state.countryList;
  })


  return (
    <WrapperCardStyled>
      {countryList.map(({name,flag,region}:any) =>{//destructured datos del api 
         return(
          <>
          <CardsCountry key={name}
             name={name}
             flag={flag}
             region={region}
             onClick={name} />
          </>
         ) 
      })}
        
    </WrapperCardStyled>
    
  )
}

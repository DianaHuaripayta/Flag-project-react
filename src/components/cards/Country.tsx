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
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const dispatch = useAppDispatch();
  const countryListByName = useAppSelector(state => state.countryListByName)


  const countryList = useAppSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.countryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName
    }
    return state.countryList;
  })
const axios = require('axios');

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

  return (
    <WrapperCardStyled>
      {countryList.map(({name,flag,region}:any) =>{//destructured datos del api 
         return(
          <CardsCountry key={name}
             name={name}
             flag={flag}
             region={region} 
             onClick={name} 
          />
         ) 
      })}
        
    </WrapperCardStyled>
    
  )
}

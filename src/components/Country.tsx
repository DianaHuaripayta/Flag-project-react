import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CardsCountry from './CardsCountry'
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../app/store';

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
  const dispatch = useDispatch()
  // const [countryList, setCountryList] = useState([])
  const countryListByName = useSelector((state: State ) => state.countryListByName) //el estado espera un array vacio -> ver en store
  
  const countryList = useSelector((state: State) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName
    }

    return state.countryList;
  })
  console.log('el estado global es ', countryList)  
  useEffect(() => {
   fetch('https://restcountries.com/v2/all')
   .then((response) => {
      return response.json()
   })
   .then((list) => {
    dispatch ({
      type: 'SET_COUNTRY_LIST',
      payload: list,
    })
    console.log(list.length)
  })
  .catch(() => {
    console.log('error')
  })
  },[dispatch])
  return (
    <WrapperCardStyled>
      {countryList.map(({name,flag,region}:any) =>{//destructurar datos del api 
         return(
          <CardsCountry key={name}
          name={name} 
          flag={flag} 
          region={region}/>
         ) 
      })}
        
    </WrapperCardStyled>
    
  )
}

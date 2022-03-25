import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CardsCountry from './CardsCountry'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
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
  const dispach = useDispatch()
  // const [countryList, setCountryList] = useState([])
  const countryList = useSelector((state: RootState ) => state.countryList) //el estado espera un array vacio -> ver en store
  
  console.log('el estado global es ', countryList)  
  useEffect(() => {
   fetch('https://restcountries.com/v2/all')
   .then((response) => {
      return response.json()
   })
   .then((list) => {
    dispach ({
      type: 'SET_COUNTRY_LIST',
      payload: list,
    })
    console.log(list.length)
  })
  .catch(() => {
    console.log('error')
  })
  },[])
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

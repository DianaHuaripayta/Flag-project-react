import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CardsCountry from './CardsCountry'
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
  const [countryList, setCountryList] = useState([])
  useEffect(() => {
   fetch('https://restcountries.com/v2/all')
   .then((response) => {
      return response.json()
   })
   .then((data) => {
    setCountryList(data)
    console.log(data, 'data')
  })
  .catch(() => {
    console.log('error')
  })
  },[])
  return (
    <WrapperCardStyled>
      {countryList.map(({name,flag,region}) =>{//destructurar datos del api 
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

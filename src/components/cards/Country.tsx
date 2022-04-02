import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCountryList } from '../../features/listSlice';
import CardsCountry from './CardsCountry';

const WrapperCardStyled = styled.div`
background: yellow;
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

  
    useEffect(()=>{
      (async()=>{
      const catData = await fetch('https://restcountries.com/v2/all')
          .then(response => response.json());
              console.log(catData)
              dispatch(setCountryList(catData))
      })();

  },[dispatch])

  return (
    <WrapperCardStyled>
      {countryList.map(({name,flag,region}:any) =>{//destructured datos del api 
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

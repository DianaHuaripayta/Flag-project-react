import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCountryList } from '../../features/listSlice';
import CardsCountry from './CardsCountry';
import Pagination from '../pagination/Pagination';

const WrapperCardStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    max-width: 1138px;  
    padding: 1em 1em;
`;
const LengthStyled = styled.p`
    font-size: 18px;
    position: absolute;
    left: 39px;
    top: 124px;
    span{
      font-weight: bold ;
    }
`;

export default function Country() {

const dispatch = useAppDispatch();
const axios = require('axios');
const countryListByName = useAppSelector(state => state.countryListByName)
// here
const [currentPage, setcurrentPage] = useState(1);
const [itemsPerPage, setitemsPerPage] = useState(5);

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

  const pages = [];
  for (let i = 1; i <= Math.ceil(countryList.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countryList.slice(indexOfFirstItem, indexOfLastItem);
  const length =  currentItems.length
  return (
    <>
    <LengthStyled>Countries : <span>{length}</span> </LengthStyled>
    <WrapperCardStyled>

      {currentItems.map(({ name, flag, region }: any) => {
        return (
          <>
            <CardsCountry key={name}
              name={name}
              flag={flag}
              region={region}
              onClick={name} />
          </>
        );
      })}

    </WrapperCardStyled>
    <Pagination
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
        itemsPerPage={itemsPerPage}
        setitemsPerPage={setitemsPerPage}
        pages={pages} 
      />
      
    </>
    
  )
}

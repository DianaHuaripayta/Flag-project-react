import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
 import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import axios from 'axios';
import { setCountryList } from '../../features/listSlice';
export default function SelectedCard() {
  // let {id} = useParams()
  const {name}=useParams() 
  // let params = useParams();
  let DBcountry = useAppSelector((state) => state.countryList.filter(item => item.name === name))
  
   const [country, setCountry] = useState(DBcountry)
  console.log(country)
   useEffect(()=>{
     axios.get(`https://restcountries.eu/rest/v2/alpha/${name.toLocaleLowerCase()}`)
      .then((response) => {
        console.log(country, 'country')
        setCountry(response.data)
      })
      .catch((error) =>  {
        console.log(error, 'error');
      })
  },[country,name])
//   const dispatch=useAppDispatch()
//   const countries = useAppSelector((state) => state.countryList)
//   const [currentCountry, setCurrentCountry]=React.useState(countries.filter(country=>country.name===name))

//   React.useEffect(()=>{
//     dispatch(setCountryList())
// },[dispatch])


//   React.useEffect(()=>{
  
//     setCurrentCountry(countries.filter(country=>country.name===name))
// },[countries, name])

  return (
    <>

    <img src= { country.flag} alt="" />
    <h1>{ country.name}</h1>
    </>  
  )
}

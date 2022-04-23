import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
 import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import axios from 'axios';
import { setCountryList } from '../../features/listSlice';
import DetailsSelectedCard from './DetailsSelectedCard'
export default function SelectedCard() {
  // let {id} = useParams()
  const {id}=useParams() 
  // let params = useParams();
  let DBcountry = useAppSelector((state) => state.countryList.find(item => item.alpha2Code === id))
  
   const [country, setCountry] = useState(DBcountry)
  console.log(country)

  useEffect(() => {

    if (!country) {
      axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
          .then((response) => {
            console.log(country, 'country')
            setCountry(response.data)
          })
          .catch((error) =>  {
            console.log(error, 'error');
          })
    }
  }, [country,id])


  //  useEffect(()=>{
  //    axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
  //     .then((response) => {
  //       console.log(country, 'country')
  //       setCountry(response.data)
  //     })
  //     .catch((error) =>  {
  //       console.log(error, 'error');
  //     })
  // },[country,id])

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
    <DetailsSelectedCard country={country}/>
    </>  
  )
}

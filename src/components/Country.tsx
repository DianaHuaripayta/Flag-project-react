import React, { useEffect } from 'react'
import styled from 'styled-components';
import CardsCountry from './CardsCountry'

import { useAppDispatch, useAppSelector } from '../hooks';
import { setCountryList } from '../features/listSlice';
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
  const catState = useAppSelector(state => state.listCountry)
    useEffect(()=>{
      (async()=>{
      const catData = await fetch('https://restcountries.com/v2/all')
          .then(response => response.json());
              console.log(catData)
              dispatch(setCountryList(catData))
      })();

  },[])
  // const [countryList, setCountryList] = useState([]) - countryListByName
  // const countryListByName = useAppSelector((state) => state.counter.value) //el estado espera un array vacio -> ver en store
  
  // const countryList = useAppSelector((state) => {
  //   if (state.filterByRegion !== '' && countryListByName.length === 0) {
  //     return state.coutryFilteredByRegion;
  //   }
  //   if (countryListByName.length > 0) {
  //     return countryListByName
  //   }

  //   return state.countryList;
  // })  dispatch(actions.countryList)
//    console.log('el estado global es ', countryListByName)  
//   useEffect(() => {
//    fetch('https://restcountries.com/v2/all')
//    .then((response) => {
//       return response.json()
//    })
//    .then((list) => {
//     dispatch ({
//       type: 'SET_COUNTRY_LIST',
//       payload: list,
// })
//     console.log(list.length)
//   })
//   .catch(() => {
//     console.log('error')
//   })
//   },[dispatch])
  return (
    <WrapperCardStyled>
      <div>{catState && <ul>
        {catState.map(catItem=> <li key={catItem.name}>{catItem.name}</li>)}
        </ul>}</div>
      {/* {countryListByName.map(({name,flag,region}:any) =>{//destructurar datos del api 
         return(
          <CardsCountry key={name}
          name={name} 
          flag={flag} 
          region={region}/>
         ) 
      })}
         */}
    </WrapperCardStyled>
    
  )
}

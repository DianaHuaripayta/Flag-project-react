import React, { useState } from 'react'
import InputSearch from './inputSearch';
import { useDispatch } from 'react-redux'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function SearchFC() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const filterByName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value)
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: e.target.value
    })
  }

  const clearInput = () => {
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: ''
    })
    setInputValue('')
  }
  return (
      <>
      {inputValue && <HighlightOffIcon onClick={clearInput}/>}
        <InputSearch placeholder="Search for a country..."  
            value={inputValue}  
            onChange={filterByName}/>
      </>
  )
}

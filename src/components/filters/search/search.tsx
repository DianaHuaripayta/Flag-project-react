import React, { useState } from 'react'
import InputSearch from './inputSearch';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useAppDispatch } from '../../../hooks';
import { setCountryByName } from '../../../features/listSlice';
export default function SearchFC() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  const filterByName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value)
    dispatch({
      type: setCountryByName,
      payload: e.target.value
    })
  }

  const clearInput = () => {
    dispatch({
      type: setCountryByName,
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

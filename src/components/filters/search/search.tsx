import React, { useState } from 'react'
import InputSearch from './inputSearch';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../hooks';
import { setCountryByName } from '../../../features/listSlice';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

const InputStyled = styled.label`
 background-color: #fff;
    border-radius: 14px;
    height: 17px;
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    width: 238px;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
  /* width: 30rem;
    height: 3.5rem;
    background-color: '#ffff';
    border-radius: 0.375rem;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-color .2s ease-in-out; */
  .IconSearch {
    margin: 1em;
    color: #C4C4C4;
    cursor: pointer;
  }
  .iconsStyled{
    cursor: pointer;
  }
  input {
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    outline: 0;
    /* color: var(--black); */
    background: '#fff';
    &::-webkit-input-placeholder {
      color: #C4C4C4;
      
    }
  }
`
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
      <InputStyled> 
        <Input 
        disableUnderline={true}
        placeholder="Search for a country..." 
        type="text" value={inputValue}  
        onChange={filterByName}
      
      />

        {inputValue && <CloseIcon onClick={clearInput} className='iconsStyled'/>}
        <SearchIcon className='IconSearch'/>
      </InputStyled>
      </>
  )
}

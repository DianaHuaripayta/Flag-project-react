import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import styled from 'styled-components';
const SearchStyled = styled.div`
    background-color: grey;
    border-radius: 30px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    width: 238px;
 .wrapper{
    display: flex;
    align-items: center;
 }
`
export default function SearchDemo() {
  return (
    <SearchStyled>
        <div className="wrapper">
        <Input  placeholder="Search" disableUnderline={true}  type='search'/>
        <SearchIcon/>
        </div>
    </SearchStyled>
  )
}

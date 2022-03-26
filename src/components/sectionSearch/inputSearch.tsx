import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const InputStyled = styled.label`
  width: 30rem;
    height: 3.5rem;
    background-color: '#ffff';
    border-radius: 0.375rem;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-color .2s ease-in-out;
  .IconSearch {
    margin: 1em;
    color: #C4C4C4;
  }
  input {
    
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .7em;
    outline: 0;
    /* color: var(--black); */
    background: '#fff';
    &::-webkit-input-placeholder {
      color: #C4C4C4;
      
    }
  }
`
export default function InputSearch({ ...props }) {
  return (
    <InputStyled>
        <SearchIcon className='IconSearch'/>
        <input type="text" {...props} />
    </InputStyled>
  )
}

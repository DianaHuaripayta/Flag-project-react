import React from 'react'
import styled from 'styled-components';
import CardsCountry from './CardsCountry'
const WrapperCardStyled = styled.div`
    background: red;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    max-width: 1138px;
    padding: 1em 1em;
`;
export default function Country() {
  return (
    <WrapperCardStyled>
        <CardsCountry/>
    </WrapperCardStyled>
    
  )
}

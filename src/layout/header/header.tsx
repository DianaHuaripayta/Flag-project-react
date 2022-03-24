import React from 'react'
import styled from 'styled-components'

const ContainerMainStyled = styled.div`
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: 0;
    right: 0;
    left: 0;
    top: 0;
    position: absolute;
    padding: 16px 0px;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
    .title{
      margin: 15px 60px 5px;
    }
`;  
export default function header() {
  return (
    <ContainerMainStyled className='headerStyledGlobal'>
        <h1 className='title'>Around the world</h1>
    </ContainerMainStyled>
  )
}

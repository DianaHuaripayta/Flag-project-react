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
    box-shadow: 0 0.0625em 0.5em rgba(0, 0, 0, 0.3);
    /* ::after{ 
      bottom: 0;
      box-shadow: 0 0.0625em 0.5em rgba(0, 0, 0, 0.3);
      content: '';
    } */
    .title{
      margin: 15px 60px 5px;
    }
`;  
export default function header() {
  return (
    <ContainerMainStyled>
        <h1 className='title'>Around the world</h1>
    </ContainerMainStyled>
  )
}

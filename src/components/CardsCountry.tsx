import React from 'react'
import styled from 'styled-components';
import flag from '../assets/Flag-Peru.jpg'
const ContainerCardStyled = styled.div`
    width: 250px;
    background: #fff;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
    cursor: pointer;
    padding: 1em;
    margin: 1em;
    border-radius: 0.4em;
    max-width: 1187px;
    :hover{
      background: #f0f0f0;
    }
    .BoxFlagAndName  {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: auto;
    }
`;
const ImgCardStyled = styled.img`
    width: 140px;
`;
export default function CardsCountry() {
  return (
    <>
    <ContainerCardStyled>
      <div className='BoxFlagAndName'>
        <div>
          <ImgCardStyled src={flag} alt="flag" />
        </div>
        <div>
          <h3>Peru</h3>
          <p>Americas</p>
        </div>
      </div>
    </ContainerCardStyled>
    <ContainerCardStyled>
        <div className='BoxFlagAndName'>
          <div>
            <ImgCardStyled src={flag} alt="flag" />
          </div>
          <div>
            <h3>Peru</h3>
            <p>Americas</p>
          </div>
        </div>
      </ContainerCardStyled>
      <ContainerCardStyled>
        <div className='BoxFlagAndName'>
          <div>
            <ImgCardStyled src={flag} alt="flag" />
          </div>
          <div>
            <h3>Peru</h3>
            <p>Americas</p>
          </div>
        </div>
      </ContainerCardStyled>
      <ContainerCardStyled>
        <div className='BoxFlagAndName'>
          <div>
            <ImgCardStyled src={flag} alt="flag" />
          </div>
          <div>
            <h3>Peru</h3>
            <p>Americas</p>
          </div>
        </div>
      </ContainerCardStyled>
      <ContainerCardStyled>
        <div className='BoxFlagAndName'>
          <div>
            <ImgCardStyled src={flag} alt="flag" />
          </div>
          <div>
            <h3>Peru</h3>
            <p>Americas</p>
          </div>
        </div>
      </ContainerCardStyled>
      <ContainerCardStyled>
        <div className='BoxFlagAndName'>
          <div>
            <ImgCardStyled src={flag} alt="flag" />
          </div>
          <div>
            <h3>Peru</h3>
            <p>Americas</p>
          </div>
        </div>
      </ContainerCardStyled>
      <ContainerCardStyled>
        <div className='BoxFlagAndName'>
          <div>
            <ImgCardStyled src={flag} alt="flag" />
          </div>
          <div>
            <h3>Peru</h3>
            <p>Americas</p>
          </div>
        </div>
      </ContainerCardStyled>


      
      </>
  )
}

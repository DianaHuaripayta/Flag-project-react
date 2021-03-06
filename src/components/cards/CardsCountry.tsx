/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useNavigate } from "react-router-dom";
import slugify from 'slugify';
import styled from 'styled-components';
const ContainerCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-items: center;
    width: 285px;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
    cursor: pointer;
    padding: 1em;
    margin: 1em;
    border-radius: 0.4em;
    max-width: 1187px;
    .sectionImg  {
      width: 143px;
    height: 101px;
    }
    .BoxFlagAndName  {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: auto;
    }
`;
const ImgCardStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const SectionNameStyles = styled.div`
    width: 50%;
    height: 100px;
    text-align: center;
    .spanNameCountry{
      font-weight: bold;
    }
`;
interface IProps {
  name:  string,
  flag: string,
  region: string,
  onClick: Function,
  alpha2Code:string
}


const CardsCountry = ((prop: IProps) => {
let navigate = useNavigate();
const handleClick = () => {
  navigate(`/country/${slugify(prop.alpha2Code)}`)
  console.log(prop.alpha2Code)
  // navigate(`/country/${prop.name.toLowerCase()}`)
}
  return (
    <ContainerCardStyled className='cardDark' onClick={handleClick} key= {prop.name}>
        <div className='sectionImg'>
        <ImgCardStyled loading="lazy" src={prop.flag} alt="flag" />{/* loading lazy loads the first part that is shown on the screen, then, when scrolling down, loading the rest */}
        </div>
        <SectionNameStyles>
          <p><span className='spanNameCountry'>{prop.name}</span> <br /> {prop.region}</p>
        </SectionNameStyles>
    </ContainerCardStyled>
  )
    
})
export default CardsCountry
import React from 'react'
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import  { WrapperStyled,
  BoxStyled,
  BoxImgStyled,
  ImgFlagStyled,
  ButtonBackStyled,
  BoxDescriptionStyled} from './DetailsSelectedCardStyled'
interface Country {
    country: any
}
export default function DetailsSelectedCard(props: Country) {
  return (
   <WrapperStyled>
     <button>
        <Link to="/">Back</Link>
      </button>
      <ButtonBackStyled><ArrowBackIcon/>Back</ButtonBackStyled>
     <BoxStyled>
        <BoxImgStyled>
          <ImgFlagStyled src={props.country.flag} alt={props.country.name} />
        </BoxImgStyled>

        <BoxDescriptionStyled>
        <p className='nameCountry'>{props.country.name}</p>
         <div className='section_description'>
            <div>
              <p><strong>Name native: </strong>{props.country.nativeName}</p>
                <p><strong>Population: </strong>{props.country.population}</p>
                <p><strong>Region:</strong> {props.country.region}</p>
                <p><strong>Sub Region:</strong> {props.country.subregion}</p>
                <p><strong>Capital:</strong> {props.country.capital}</p>
            </div>
            <div>
              <p> <strong>Top Level Domain:</strong> {props.country.topLevelDomain}</p>
                    <p><strong>Currencies:</strong> {props.country.currencies.map((item: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <span>{item.name}</span>)}</p>
                    <p className="languages"><strong>Languages:</strong> {props.country.languages.map((item: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <span>{item.name}</span>)}</p>
            </div>
         </div>
         <p className="borders"><strong>Border Countries:</strong></p>
                {props.country.borders.map((item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <span>{item} </span>)}
        </BoxDescriptionStyled>
    
    </BoxStyled>
   </WrapperStyled>
  )
}

import React from 'react'
import styled from 'styled-components';
import Country from '../components/cards/Country';
import SearchDemo from '../components/filters/search/SearchDemo';
import SectionRenderFilters from '../components/filters/SectionMain';
import SelectVariants from '../components/filters/test/UseSelect';
import BasicSpeedDial from '../components/social/SpeedDial';

const WrapperStyled = styled.div`
  margin-top: 8rem;
`;
export default function HomePage() {
  return (
    <WrapperStyled>
      <SectionRenderFilters/>
      {/* <SearchDemo/> */}
      
      <Country/>
      <BasicSpeedDial/>
    </WrapperStyled>
  )
}

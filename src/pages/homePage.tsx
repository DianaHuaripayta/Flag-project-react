import React from 'react'
import styled from 'styled-components';
import Country from '../components/cards/Country';
import SectionRenderFilters from '../components/filters/SectionMain';
import FloatingButtom from '../components/floatingButtom/FloatingButtom';
import BasicSpeedDial from '../components/floatingButtom/SpeedDial';
const WrapperStyled = styled.div`
  margin-top: 8rem;
`;
export default function HomePage() {
  return (
    <WrapperStyled>
      <SectionRenderFilters/>
      <Country/>
      {/* <FloatingButtom/> */}
      <BasicSpeedDial/>
    </WrapperStyled>
  )
}

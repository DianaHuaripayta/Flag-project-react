import React from 'react'
import styled from 'styled-components';
import Country from '../components/cards/Country';
import SectionRenderFilters from '../components/filters/SectionMain';

const WrapperStyled = styled.div`
  margin-top: 8rem;
  background: red;
`;
export default function HomePage() {
  return (
    <WrapperStyled>
      <SectionRenderFilters/>
      <Country/>
    </WrapperStyled>
  )
}

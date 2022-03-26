import React from 'react'
import styled from 'styled-components';
import Country from '../components/Country';
import SectionRenderFilters from '../components/sectionSearch/SectionMain';

const WrapperStyled = styled.div`
  margin-top: 8rem;
`;
export default function HomePage() {
  return (
    <WrapperStyled>
      <SectionRenderFilters/>
      <Country/>
    </WrapperStyled>
  )
}

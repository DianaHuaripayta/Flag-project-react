import React from 'react'
import Search from './search'
import SelectRegion from './SelectRegion'
import styled from 'styled-components'
import RadioButtonsGroup from './select'

const WrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    z-index: 900;
`
export default function SectionRenderFilters() {
  return (
    <WrapperStyled>
      <Search/>
      <RadioButtonsGroup/>
    </WrapperStyled>
  )
}

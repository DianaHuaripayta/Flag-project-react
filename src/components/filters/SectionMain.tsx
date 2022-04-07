import React from 'react'
import Search from './search/search'
import styled from 'styled-components'
import RadioButtonsGroup from './select/select'
import UseSelect from './test/UseSelect'

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
      {/* <RadioButtonsGroup/> */}
      <UseSelect/>
    </WrapperStyled>
  )
}

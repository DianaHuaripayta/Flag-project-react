import React from 'react'
import Search from './search/search'
import styled from 'styled-components'
import RadioButtonsGroup from './select/select'
import SelectAutoWidth from './test/SelectWidth'
import SelectVariants from './test/select1'

const WrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    z-index: 900;
    background: blue;
`
export default function SectionRenderFilters() {
  return (
    <WrapperStyled>
      <Search/>
      {/* <RadioButtonsGroup/> */}
      
      <SelectVariants/>
    </WrapperStyled>
  )
}

import React from 'react'
import Search from './search/search'
import styled from 'styled-components'
import UseSelect from './dropdown/UseSelect'

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
      <UseSelect/>
    </WrapperStyled>
  )
}

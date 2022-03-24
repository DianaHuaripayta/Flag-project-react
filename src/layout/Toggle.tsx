import React from 'react'
import styled from 'styled-components'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const BoxIconsStyled = styled.div`
    position: absolute;
    top: 2rem;
    right: 4rem;
    transition: all .5s linear;
    cursor: pointer;
    z-index: 200;
    .wordChange{
      display: flex;
      flex-wrap: nowrap;
      margin-top: 27px;
      font-weight: bold;
    }
`;
const IconLightStyled = styled(LightModeIcon)`
   &.override{
            font-size: 35px;
            position: absolute;
            top: -1rem;
            right: 2rem;
            transition: all .5s linear;
    }
`;
const IconDarkStyled = styled(DarkModeIcon)`
   &.override{
            font-size: 35px;
            position: absolute;
            top: -1rem;
            right: 2rem;
            transition: all .5s linear;
    }
`;
interface FooProp {
    darkMode: "light" | "dark" | (() => void);
    _handleToggleTheme: (() => void);
}

export default function Toggle(prop: FooProp) {

    console.log(prop.darkMode)
  return (
    <div onClick={prop._handleToggleTheme}>
    {prop.darkMode === 'light'  
    ?  
    <BoxIconsStyled>
      <IconDarkStyled className='override' />
      <p className='wordChange'>Dark Mode</p>
    </BoxIconsStyled>
    :
    <BoxIconsStyled>
      <IconLightStyled className='override' />
      <p className='wordChange'>Light Mode</p>
    </BoxIconsStyled> 
    }
    </div>  
  )
}

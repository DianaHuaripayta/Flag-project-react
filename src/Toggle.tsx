import React from 'react'
import styled from 'styled-components'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const IconLightStyled = styled(LightModeIcon)`
   &.override{
            position: absolute;
            top: 2rem;
            right: 4rem;
            transition: all .5s linear;
    }
`;
const IconDarkStyled = styled(DarkModeIcon)`
   &.override{
            position: absolute;
            top: 2rem;
            right: 4rem;
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
    {prop.darkMode === 'light'  ? <><p>Light mode</p><IconLightStyled className='override' /></>  : <><p>DARK mode</p><IconDarkStyled className='override' /></>}
    </div>  
  )
}

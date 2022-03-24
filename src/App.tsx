import React from 'react';
import styled,{ ThemeProvider } from 'styled-components'
import UseDarkMode from './styles/useDarkMode'
import Toggle from './layout/Toggle'
import {GlobalStyle, lightTheme, darkTheme} from './styles/globalStyles'
import { Routes } from './routes/routes';


function App() {
 const  [darkMode, _handleToggleTheme]: "light" | "dark" | (() => void)| any  = UseDarkMode(); 
 const themeMode = darkMode === 'light' ? lightTheme : darkTheme

  return (
    // <Provider store={store}> 
        <ThemeProvider theme={themeMode}>
            <GlobalStyle/>
              <Toggle darkMode={darkMode} _handleToggleTheme={_handleToggleTheme}/>
              <Routes></Routes>
        </ThemeProvider>
    // </Provider>
  );
}

export default App;
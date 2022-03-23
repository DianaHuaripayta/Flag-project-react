import React from 'react';
// import {store} from './app/store'
import styled,{ ThemeProvider } from 'styled-components'
import UseDarkMode from './styles/useDarkMode'
import Toggle from './Toggle'
import {GlobalStyle, lightTheme, darkTheme} from './styles/globalStyles'
import ApiAxios from './app/apiAxios';
import HomePage from './pages/homePage'

function App() {
 const  [darkMode, _handleToggleTheme]: "light" | "dark" | (() => void)| any  = UseDarkMode(); 
 const themeMode = darkMode === 'light' ? darkTheme : lightTheme

  return (
    // <Provider store={store}> 
        <ThemeProvider theme={themeMode}>
            <GlobalStyle/>
            <Toggle darkMode={darkMode} _handleToggleTheme={_handleToggleTheme}/>
            <HomePage/>
          <ApiAxios/>
        </ThemeProvider>
    // </Provider>
    
  
  );
}

export default App;
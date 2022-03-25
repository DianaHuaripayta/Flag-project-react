import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
    font-family: 'Nunito', sans-serif;
  }
  .headerStyledGlobal{
    background: ${({ theme }) => theme.element};
    transition: all .5s linear;
  }
  .cardDark{
    background: ${({ theme }) => theme.element};
    transition: all .5s linear;
    :hover{ 
      background: ${({ theme }) => theme.hover};
    }
  }
`

export const lightTheme = {
    body: '#FAFAFA',
    text: '#12121',
    primary: '#6200ee',
    element: '#ffff',
    hover: '#FAFAFA'
  }
export const darkTheme = {
    body: '#202c37',
    text: '#ffff',
    primary: '#bb86fc',
    element: '#2b3945',
    colorCardDark: '#616161',
    hover: '#424242'
}

import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
    font-family: 'Nunito', sans-serif;
  }
  .btn-primary{
    background: ${({ theme }) => theme.primary};
  }
`

export const lightTheme = {
    body: '#ffff',
    text: '#12121',
    primary: '#6200ee'
}
export const darkTheme = {
    body: '#121212',
    text: '#ffff',
    primary: '#bb86fc'
}

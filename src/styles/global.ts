import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${(props)=>props.theme['gray1_background']};
    color: ${(props)=>props.theme['gray6_text']};
    -webkit-font-smoothing:antialiased;
}

body,input-security,textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

:focus{
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props)=>props.theme['green']};
}
`
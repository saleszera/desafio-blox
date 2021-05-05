import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root{
    --black: #30313c;
    --gray: #757575;
    --gray-light: #d2d2d2;
    --white: #ffff;
    --blue: #5f8afc;
    --cyan-dark: #69acdb;
    --cyan-light: #75c1e2;
    --yellow-dark: #ead558;
    --yellow-light: #eedf76;
    --green-dark: #72b356;
    --green-ligh: #7fbe5c;
    --red-dark: #b61f30;
    --red-light: #d72636;
  }

  body{
    background: #312E38;
    color: #FFFF;
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, button, p{
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  h1{
    font-size: 2.25rem;
  }

  h2{
    font-size: 1.5rem;
  }

  button{
    cursor: pointer;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75% !important;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.5% !important;
    }
  }
`;

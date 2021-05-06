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
    --blue-light: #86A6FD;
    --blue: #5f8afc;
  }

  #root {
    margin: 0 auto;
    padding: 0 20px 50px;
    @media (min-width: 1600px) {
      max-width: 70%;
    }

    @media (min-width: 200px) and (max-width: 1199px) {
      max-width: 95%;
    }

    @media (min-width: 1200px) {
      max-width: 85%;
    }
  }

  body{
    background: var(--blue);
    color: var(--white);
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

  span{
    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;
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

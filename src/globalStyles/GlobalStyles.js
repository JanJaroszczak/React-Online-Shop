import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

html{
  font-size: 62.5%;
}

body{
    font-family: 'Roboto Condensed', sans-serif;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}


`;

export default GlobalStyle;

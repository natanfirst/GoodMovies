import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    }

   ul, li, a {
    text-decoration: none;
    list-style: none;
    }
`;

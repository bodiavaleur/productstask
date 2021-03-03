import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html{
    font-size: 16px;
  }
  
  #root {
    height: 100vh;
  }

  .pagination {
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-self: center;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-family: "Roboto",sans-serif;
    color: #333;


    &__page {
      width: 1.5rem;
      height: 1.5rem;
      font-weight: bold;
      font-size: 0.9rem;
      line-height: 1.5rem;
      text-align: center;
      border-radius: 100%;

      a {
        cursor: pointer;
        outline: none;
      }

      &--active {
        color: rgb(255,204,0);
      }
    }
  }
`;

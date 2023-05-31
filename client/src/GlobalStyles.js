import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  p {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }

  ul {
    margin-bottom: 1rem;
    padding-left: 1rem;
    list-style: disc;
  }

  button {
    padding: 0.5rem 1rem;
    font-family: inherit;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  svg {
    fill: #007bff;
  }
`;

export default GlobalStyles;

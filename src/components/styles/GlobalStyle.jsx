import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
    transition: all .1s ease-in;
  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`;

export default function GlobalStyle() {
  return <EstiloGlobal />;
}

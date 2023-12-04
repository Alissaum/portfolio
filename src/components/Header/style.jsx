import styled from "styled-components";

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  width: 100vw;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  padding: 2rem 0;

  ul {
    display: flex;
    justify-content: space-evenly;
    width: inherit;
  }

  li,
  a {
    color: #fff;
    font-size: 2rem;
    transition: all 0.2s linear;
    &:hover {
      scale: 1.1;
      transform: translateY(4%);
    }
  }
`;

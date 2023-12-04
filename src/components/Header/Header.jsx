import { NavBar, Cabecalho } from "./style";

export default function Header() {
  return (
    <Cabecalho>
      <NavBar>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
        </ul>
      </NavBar>
    </Cabecalho>
  );
}

import { NavBar, Cabecalho } from "./style";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../Inicio/Inicio.jsx";
import Sobre from "../Sobre/Sobre.jsx";
import Projetos from "../Projetos/Projetos.jsx";

export default function Header() {
  return (
    <Cabecalho>
      <BrowserRouter>
        <NavBar>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
          </ul>
        </NavBar>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </Cabecalho>
  );
}

import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

const { default: Cabecalho } = require("componentes/Cabecalho");

function PaginaBase(){
   return(
      <main>
         <Cabecalho />
         <FavoritosProvider>
            <Container>
               <Outlet />
            </Container>
            <Rodape />
         </FavoritosProvider>
      </main>
   )
}

export default PaginaBase;
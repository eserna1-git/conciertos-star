import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { ArtistasListar } from "../../componentes/canciones/ArtistasListar";
import { ArtistasAdmin } from "../../componentes/canciones/ArtistasAdmin";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Acerca } from "../../componentes/otros/Acerca";
import { ArtistasRegistrar } from "../../componentes/canciones/ArtistasRegistrar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/artlis" element={<ArtistasListar />} />
      <Route path="/artadmin" element={<ArtistasAdmin />} />
      <Route path="/artreg" element={<ArtistasRegistrar/>}/>

      <Route path="*" element={<NoEncontrado />} />
      <Route path="/acer" element={<Acerca />} />
    </Routes>
  );
};

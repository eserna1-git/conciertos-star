import Artista1 from "../../../../public/blessd.jpg";
import Artista2 from "../../../../public/pirlo420.jpg";

export const Inicio = () => {
  return (
    <>
      <br />
      <div className="card" style={{ width: "18rem" }}>
        <img src={Artista1} alt="Imagen Artista 1" />
        <div className="card-body">
          <p className="card-text">
            Artista representativo de Conciertos Star (Blessd)
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={Artista2} alt="Imagen Artista 2" />
        <div className="card-body">
          <p className="card-text">
            Artista representativo de Conciertos Star (Pirlo420)
          </p>
        </div>
      </div>
    </>
  );
};

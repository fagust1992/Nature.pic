import Context from "../Context";
import { useContext } from "react";
import Heart from "./Heart";

const Carta = () => {
  const { fotos, setFotos } = useContext(Context);
  const megusta = (id) => {
    const i = fotos.findIndex((valor) => valor.id === id);
    const nuevo = [
      {
        alt: fotos[i].alt,
        src: fotos[i].src,
        id: fotos[i].id,
        like: true,
      },
    ];
    const nuevoremplazo = fotos.map(
      (objeto) => nuevo.find((valor) => valor.id === objeto.id) || objeto
    );
    setFotos(nuevoremplazo);
  };

  return (
    <>
      <div>
        <div className="row">
          {fotos.map((intem, index) => (
            <div key={index} className="col ">
              <div
                style={{
                  backgroundImage: `url(${intem.src.medium})`,
                  width: "200px",
                  height: "210px",
                  backgroundSize: "cover",
                }}
                className="imagen-icono"
              >
                <div onClick={() => megusta(intem.id)}>
                  {intem.like ? <Heart props={true} /> : <Heart />}
                </div>
                <h6 className="titulo-h6">{intem.alt}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carta;

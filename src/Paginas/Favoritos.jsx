import Context from "../Context";
import { useContext } from "react";
const Favoritos = () => {
  const { fotos, setFotos } = useContext(Context);

  const megusta = (id) => {
    const i = fotos.findIndex((valor) => valor.id === id);
    const nuevo = [
      {
        alt: fotos[i].alt,
        src: fotos[i].src,
        id: fotos[i].id,
        like: false,
      },
    ];
    const nuevoremplazo = fotos.map(
      (objeto) => nuevo.find((valor) => valor.id === objeto.id) || objeto
    );
    setFotos(nuevoremplazo);
  };
  console.log(fotos);
  return (
    <>
      <div className="row">
        <h6 className="h6">
          Puedes dar click sobra la imagen para quitar de favoritos
        </h6>
        {fotos.map(
          (intem, index) =>
            intem.like && (
              <div key={index} className="col ">
                <div
                  onClick={() => megusta(intem.id)}
                  style={{
                    backgroundImage: `url(${intem.src.medium})`,
                    width: "200px",
                    height: "210px",
                    backgroundSize: "cover",
                  }}
                  className="imagen-icono"
                ></div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Favoritos;

import { useContext } from "react";
import { ImagenCard } from "./ImagenCard";
import { ImagenContext } from "../context/ContextProvider";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { imagenes, setImagenes } = useContext(ImagenContext);

  const handleFav = (id) => {
    const newImg = imagenes.map((imagen) =>
      imagen.id === id ? { ...imagen, favoritos: !imagen.favoritos } : imagen
      );
      setImagenes(newImg);
  };

  return (
    <div className="container mt-4">
    <div className="row row-cols-1 row-cols-md-4 g-4">
        {imagenes.length ? (
          imagenes.map((imagen) => (
            <div key={imagen.id} className="col mb-4">
              <div className="card">
                <img src={imagen.src.original} alt={imagen.alt}/>
              <div className="card-body">
                <button onClick={() => handleFav(imagen.id)} className="btn btn-outline-danger">
                  <IconHeart filled={imagen.favoritos}/>
                </button>
              </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
    </div>
    </div>
  );
};
export default Gallery;

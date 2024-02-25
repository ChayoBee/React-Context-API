import { useContext } from "react";
import { ImagenContext } from "../context/ContextProvider";
import { ImagenCard } from "../components/ImagenCard";

export const Favoritos = () => {
    const { imagenes } = useContext(ImagenContext);
    const ImgFiltradas = imagenes.filter((imagen) => imagen.favoritos === true);

    return (
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 gallery grid-columns-4">
          {ImgFiltradas.length ? (
              ImgFiltradas.map((imagen, key) => (
                <ImagenCard 
                key={key}
                id={imagen.id}
                url={imagen.src.original}
                photographer={imagen.photographer}
                filled={imagen.favoritos}/>
              ))
          ) : (
            <>
              <h2>No tienes favoritos.</h2>
            </>
          )}
        </div>
      </div>
    );
  };

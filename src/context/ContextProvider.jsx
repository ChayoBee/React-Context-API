import { createContext, useEffect, useState } from "react";

export const ImagenContext = createContext();

export const ContextProvider = ({ children }) => {
    const [imagenes, setImagenes] = useState([]);

    const handleFav = (id) => {
        setImagenes((prevImagenes) =>
          prevImagenes.map((imagen) =>
            imagen.id === id ? { ...imagen, favoritos: !imagen.favoritos } : imagen
          )
        );
      };

    const FetchImg = async () => {
        try {
            const resp = await fetch('/photos.json');
            const data = await resp.json();

            if (!data || !data.photos || !Array.isArray(data.photos)) {
                console.error('Invalid data format:', data);
                setImagenes([]);
                return;
            }

            setImagenes(data.photos);
        } catch (error) {
            console.error('Error fetching images:', error);
            setImagenes([]);
        }
    };

    useEffect(() => {
        FetchImg();
    }, []);

    return (
        <ImagenContext.Provider value={{ imagenes, setImagenes, handleFav }}>
            {children}
        </ImagenContext.Provider>
    );
};
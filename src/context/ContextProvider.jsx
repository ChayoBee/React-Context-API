import { createContext, useEffect, useState } from "react";

export const ImagenContext = createContext();

export const ContextProvider = ({ children }) => {
    const [imagenes, setImagenes] = useState([]);

    const FetchImg = async () => {
        try {
            const resp = await fetch('/photos.json');
            const data = await resp.json();

            if (!data || !data.photos || !Array.isArray(data.photos)) {
                console.error('Invalid data format:', data);
                setImagenes([]);
                return;
            }

         /*   const ImgData = data.photos.map((image) => ({
                    id: image.id,
                    width: image.width,
                    height: image.height,
                    url: image.url,
                    photographer: image. photographer,
                    photographer_url: image.photographer_url,
                    photographer_id: image.photographer_id,
                    avg_color: image.avg_color,
                    src: {
                        original: image.src.original,
                        large2x: image.src.large2x,
                        large: image.src.large,
                        medium: image.src.medium,
                        portrait: image.src.portrait,
                        landscape: image.src.landscape,
                        tiny: image.src.tiny,
                    },
                    liked: false,
                    alt: image.alt,
                }));
            
        */    setImagenes(data.photos);
        } catch (error) {
            console.error('Error fetching images:', error);
            setImagenes([]);
        }
    };

    useEffect(() => {
        FetchImg();
    }, []);

    return (
        <ImagenContext.Provider value={{ imagenes, setImagenes }}>
            {children}
        </ImagenContext.Provider>
    );
};
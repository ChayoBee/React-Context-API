import { useContext } from "react";
import { ImagenContext } from "../context/ContextProvider";
import { ImagenCard } from "../components/ImagenCard";
import { Container, Row, Col } from "react-bootstrap";

export const Favoritos = () => {
    const { imagenes } = useContext(ImagenContext);
    const ImgFiltradas = imagenes.filter((imagen) => imagen.favoritos === true);

const handleFav = (id) => {
  const newImg = imagenes.map((imagen) =>
    imagen.id === id ? { ...imagen, favoritos: !imagen.favoritos } : imagen
    );
    setImagenes(newImg);
};  

    return (
      <Container fluid className="mt-4">
        <h1>Fotos favoritas</h1>
        <Row xs={1} md={4} className="g-4">
          {ImgFiltradas.length ? (
              ImgFiltradas.map((imagen, key) => (
              <Col key={key} className="mb-4">  
                <ImagenCard 
                id={imagen.id}
                url={imagen.src.original}
                photographer={imagen.photographer}
                filled={imagen.favoritos}
                handleFav={handleFav}
                className="card-img-top"/>
              </Col>
              ))
          ) : (
            <Col>
              <h2>No tienes favoritos.</h2>
            </Col>
          )}
        </Row>
      </Container>
    );
  };

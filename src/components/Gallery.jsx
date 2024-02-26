import { useContext } from "react";
import { ImagenCard } from "./ImagenCard";
import { ImagenContext } from "../context/ContextProvider";
import IconHeart from "./IconHeart";
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  const { imagenes, setImagenes } = useContext(ImagenContext);

  const handleFav = (id) => {
    const newImg = imagenes.map((imagen) =>
      imagen.id === id ? { ...imagen, favoritos: !imagen.favoritos } : imagen
      );
      setImagenes(newImg);
  };

  return (
    <Container fluid className="mt-4">
    <Row xs={1} md={4} className="g-4">
        {imagenes.length ? (
          imagenes.map((imagen) => (
            <Col key={imagen.id}>
              
                <img src={imagen.src.original} alt={imagen.alt} className="card-img-top"/>
              
                <button onClick={() => handleFav(imagen.id)} className="btn btn-outline-danger">
                  <IconHeart filled={imagen.favoritos}/>
                </button>
              
            </Col>
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
    </Row>
    </Container>
  );
};
export default Gallery;

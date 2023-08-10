import Carousel from "react-bootstrap/Carousel";

export default function Carrusel() {
  return (
    <div className="container-carrusel">
      <Carousel>
        <Carousel.Item>
          <img src="/carrusel2.jpeg" alt="1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/carrusel-amarillo.png" alt="1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/carrusel-negro.png" alt="1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/carrusel-rojo.png" alt="1" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

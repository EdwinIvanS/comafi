import Carousel from "react-bootstrap/Carousel";

export default function CarruselProduct() {
  
  return (
    <div className="container-carrusel">
      <Carousel>
        <Carousel.Item>
          <img src="/carrusel2.jpeg" alt="1" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

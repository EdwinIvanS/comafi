import Carousel from "react-bootstrap/Carousel";

export default function Carrusel() {
  return (
    <>
      <div className="container-carrusel">
        <Carousel>
          <Carousel.Item>
            <img src="/public/carrusel2.jpeg" alt="1" />
          </Carousel.Item>
          {/*
           <Carousel.Item>
            <img src="/public/asdwq.jpg" alt="2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/public/aswq.jpg" alt="3" />
          </Carousel.Item>
           */}
        </Carousel>
      </div>
      {/*<div className="lineal"></div> */}
    </>
  );
}

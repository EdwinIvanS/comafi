import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function Carrusel() {
  return (
    <>
      <div className="container-carrusel">
        <Link to={"/Products"}>
          <Carousel>
            <Carousel.Item>
              <img src="/public/carrusel2.jpeg" alt="1" />
            </Carousel.Item>
          </Carousel>
        </Link>
      </div>
    </>
  );
}

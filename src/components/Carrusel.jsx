import { createRef, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Carrusel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    if (activeIndex === 0 && videoRef.current) {
      videoRef.current.play();
    }
  }, [activeIndex]);

  const videoRef = createRef();
  
  return (
    <div className="container-carrusel">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        <Carousel.Item>
          <video ref={videoRef} autoPlay muted width="100%" height="auto">
            <source src="/carrusel-git2.mp4" type="video/mp4" />
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <video ref={videoRef} autoPlay muted width="100%" height="auto">
            <source src="/carrusel-git3.mp4" type="video/mp4" />
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/carrusel2.jpeg" alt="1" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

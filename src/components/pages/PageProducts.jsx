import Carrusel from '../Carrusel'
export default function PageProducts() {
  return (
    <>
      <Carrusel />
      <div id="u38313">
        <div className="container clearfix">
          <h1 id="u38332-2">Fibraplas Concrete</h1>
          <h1 id="u38332-4">Reemplaza la Malla Electrosoldada</h1>
          <div className="clearfix-p">
            <p id="u38308-2">
              Macrofibra sintética estructural, fabricada bajo la Norma
              Internacional ASTMC-1116-10 Tipo 3 y Norma NSR10
            </p>
            <p id="u38308-4">
              Diseñada para ser involucrada de forma fácil al concreto,
              mejorando sus propiedades, reemplazando la malla electrosoldada y
              las fibras metálicas, siendo fibra de refuerzo para el concreto.
            </p>
          </div>
          <div className="center container">
            <div className="img-product">
              <img src="/public/mazo-fibra.png" alt=""  width="200px"/>
            </div>
            <div className='ul-product'>
              <ul className="ul-grup-1">
                <li>Reemplaza la Malla Electrosoldada</li>
                <li>AHORRO DEL MÁS 50% frente a la malla electrosoldada</li>
                <li>Con 4 mazos rinde 1.5m2 de placa de 10cm</li>
                <li>
                  Mejora las propiedades de los pisos y entre pisos de Concreto
                </li>
                <li>Más liviana que el acero</li>
                <li>Reduce la huella de Carbono en el medio ambiente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="use">
        <h1>USE FIBRAPLAS CONCRETE EN:</h1>
        <div className="details-product">
          <div>
            <img src="/public/construction.png" width="100px" />
            <p>Losas de Concreto</p>
          </div>
          <div>
            <img src="/public/wood.png" width="90px" />
            <p>Pisos de Concreto</p>
          </div>
          <div>
            <img src="/public/road.png" width="90px" />
            <p>Pavimentos Rígidos</p>
          </div>
          <div>
            <img src="/public/tunnel.png" width="90px" />
            <p>Túneles</p>
          </div>
          <div>
            <img src="/public/under-construction.png" width="90px" />
            <p>Concretos Pre Fabricados</p>
          </div>
          <div>
            <p>Y muchos más usos</p>
          </div>
        </div>
      </div>

      <div className="container clearfix">
        <h1>Personas que se han unido al Poder de Fibraplas Concrete</h1>
        <p id="u40614-2">
          Desde distintos puntos ingeniaros, arquitectos, constructores nos
          hablan de porque Fibraplas Concrete es la mejor opción para reemplazar
          la malla electrosoldada, para pisos, entre pisos de concreto,
          pre-fabricados entre otros.
        </p>
      </div>

      <div className="clearfix-card">
        <div
          className="grpelem_shared"
          id="u46124"
          data-content-guid="u46124_content"
        >
          <iframe
            width="350"
            height="270"
            src="https://www.youtube.com/embed/EKD_X49QG-w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <div className="clearfix colelem" id="u40617-4">
            <p id="u40617-2">Julio Zambrano</p>
          </div>
          <div className="clearfix colelem" id="u40616-6">
            <p id="u40616-2">Ingeniero Civil</p>
            <p id="u40616-4">Director Obra Central del Pacífico</p>
          </div>
        </div>
        <div className="grpelem_shared" id="u46140">
          <iframe
            width="350"
            height="270"
            src="https://www.youtube.com/embed/xOiRqVFHtB4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <div className="clearfix colelem" id="u40622-4">
            <p id="u40622-2">Adrian Baz</p>
          </div>
          <div className="clearfix colelem" id="u40626-4">
            <p id="u40626-2">Ingeniero de Caminos y Puertos</p>
          </div>
        </div>
        <div
          className="grpelem_shared"
          id="u46148"
          data-content-guid="u46148_content"
        >
          <iframe
            width="350"
            height="270"
            src="https://www.youtube.com/embed/fJ4rLwc-5So"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <div className="clearfix colelem" id="u40629-4">
            <p id="u40629-2">César Torres</p>
          </div>
          <div className="clearfix colelem" id="u40630-6">
            <p id="u40630-2">Ingeniero Civil</p>
            <p id="u40630-4">Diseñador Estructural</p>
          </div>
        </div>
      </div>
    </>
  );
}

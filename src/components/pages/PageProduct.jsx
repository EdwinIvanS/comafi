import { listNav } from "../javascript/list-navbar";

export default function PageProduct() {
  return (
    <>
      <div className="container">
        <div className="product-Nav">
          <ul>
            {listNav.map((data) => {
              return (
                <li key={data.id}>
                  <p>{data.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="container-img-nav">
        <img src="" alt="" />
      </div>
      <div className="descripcion-product">
        <h1>FIBRAPLAS CONCRETE REEMPLAZA LA MALLA ELECTROSOLDADA</h1>
        <p>
          Macrofibra sintética estructural, fabricada bajo la Norma
          Internacional ASTMC-1116-10 Tipo 3 y Norma NSR10 Diseñada para ser
          involucrada de forma fácil al concreto, mejorando sus propiedades,
          reemplazando la malla electrosoldada y las fibras metálicas, siendo
          fibra de refuerzo para el concreto.
        </p>
        <div className="itens">
          <ul>
            <li>Reemplaza la Malla Electrosoldada</li>
            <li>AHORRO DEL MÁS 50% frente a la malla electrosoldada.</li>
            <li>Con 4 mazos rinde 1.5m2 de placa de 10cm.</li>
            <li>
              Mejora las propiedades de los pisos y entre pisos de Concreto
            </li>
            <li>Más liviana que el acero</li>
            <li>Reduce la huella de Carbono en el medio ambiente</li>
          </ul>
        </div>
      </div>
      <div className="use">
        <h1>USE FIBRAPLAS CONCRETE EN:</h1>
        <div>
          <div>
            <img src="" alt="" />
            <p>Losas de Concreto</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Losas de Concreto</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Losas de Concreto</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Losas de Concreto</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Losas de Concreto</p>
          </div>
          <div>
            <p>Y muchos más usos</p>
          </div>
        </div>
      </div>
      <div className="video">
        <h1>Personas que se han unido al Poder de Fibraplas Concrete</h1>
        <p>
          Desde distintos puntos ingeniaros, arquitectos, constructores nos
          hablan de porque Fibraplas Concrete es la mejor opción para reemplazar
          la malla electrosoldada, para pisos, entre pisos de concreto,
          pre-fabricados entre otros.
        </p>
        <div>
          <div className="card">
            <iframe></iframe>
            <h2>Julio Zambrano</h2>
            <p>
              Ingeniero Civil Director Obra Transversar Central del Pacífico
            </p>
          </div>
        </div>
      </div>
      <div className="especificaciones"></div>
      <div className="aspectos">
        <h1>Conoce y Descarga más Aspectos Técnicos:</h1>
        <div className="card-apectos">
            <img src="" alt="" />
            <p>Ver Libro</p>
        </div>
      </div>
    </>
  );
}

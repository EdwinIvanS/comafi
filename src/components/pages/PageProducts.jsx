import Carrusel from '../Carrusel';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import WebhookIcon from "@mui/icons-material/Webhook";
import { Link } from 'react-router-dom';

function createData(Concepto, Valor) {
  return { Concepto, Valor };
}

const handleDownloadClick = () => {
  const link = document.createElement("a");
  link.href = "/src/assets/programa-fibraplas-concrete.xlsm";
  link.download = "programa-fibraplas-concrete.xlsm";
  link.click();
};

const rows = [
  createData("Diametro Promedio", "0.6 mm"),
  createData("Tipo de Microfibra", "Sintética"),
  createData("Longitud", "55 mm"),
  createData("Fibras x KG promedio", "36600 un"),
  createData("Dosificación Frecuente", "3.0 a 6.0 kg/m³"),
  createData("Fibras por m3 (Dosificación Promedio)", "183000 un"),
  createData("Gravedad específica", "1.27 g/cm³"),
  createData("Resistencia máxima a la tensión", "524 MPa"),
  createData("Módulo de elasticidad promedio", "4.8 GPa"),
  createData("Textura superficial", "Marcado de máximo anclaje"),
  createData("Punto de fusión", "260 ºC"),
  createData("Punto de fusión", "SI"),
  createData("Relación de aspecto", "92"),
  createData("Color", "Característico"),
  createData("Absorción", "Nula"),
  createData("Resistencia a sales ácidas", "Alta"),
  createData("Resistencia al álcali", "Alta"),
  createData("Resistencia a mono-hongos", "Alta"),
  createData("Conductividad eléctrica", "Baja"),
  createData("Conductividad térmica", "Baja"),
];

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
              <img src="/mazo-fibra.png" alt="" width="200px" />
            </div>
            <div className="ul-product">
              <ul className="ul-grup-1">
                <li>
                  <CheckCircleOutlineIcon /> Reemplaza la Malla Electrosoldada
                </li>
                <li>
                  <CheckCircleOutlineIcon /> AHORRO DEL MÁS 50% frente a la
                  malla electrosoldada
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Con 4 mazos rinde 1.5m2 de placa de
                  10cm
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Mejora las propiedades de los pisos
                  y entre pisos de Concreto
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Más liviana que el acero
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Reduce la huella de Carbono en el
                  medio ambiente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="use">
        <h1>USE FIBRAPLAS CONCRETE EN:</h1>
        <div className="details-product">
          <div>
            <img src="/construction.png" width="100px" />
            <p>Losas de Concreto</p>
          </div>
          <div>
            <img src="/wood.png" width="90px" />
            <p>Pisos de Concreto</p>
          </div>
          <div>
            <img src="/road.png" width="90px" />
            <p>Pavimentos Rígidos</p>
          </div>
          <div>
            <img src="/tunnel.png" width="90px" />
            <p>Túneles</p>
          </div>
          <div>
            <img src="/under-construction.png" width="90px" />
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
              allowFullScreen=""
            ></iframe>
            <div className="colelem" id="u40617-4">
              <p id="u40617-2">
                <strong>Julio Zambrano</strong>
              </p>
            </div>
            <div className="colelem" id="u40616-6">
              <p id="u40630-2">Ingeniero Civil</p>
              <p id="u40630-2" className="u406303">
                Director Obra Central del Pacífico
              </p>
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
              allowFullScreen=""
            ></iframe>
            <div className="colelem" id="u40622-4">
              <p id="u40617-2">
                <strong>Adrian Baz</strong>
              </p>
            </div>
            <div className="colelem" id="u40626-4">
              <p id="u40630-2" className="u406303">
                Ingeniero de Caminos y Puertos
              </p>
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
              allowFullScreen=""
            ></iframe>
            <div className="colelem" id="u40629-4">
              <p id="u40617-2">
                <strong>César Torres</strong>
              </p>
            </div>
            <div className="colelem" id="u40630-6">
              <p id="u40630-2">Ingeniero Civil</p>
              <p id="u40630-2" className="u406303">
                Diseñador Estructural
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lineal-yelow"></div>

      <div className="container tb-01">
        <h1>Especificaciones Técnicas</h1>
        <TableContainer component={Paper} id="table-001">
          <Table
            sx={{ maxWidth: 550, margin: "auto" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <strong>Concepto</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>Valor</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="td" scope="row">
                    {row.Concepto}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {row.Valor}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="use tb-01">
        <h1>Conoce y Descarga más Aspectos Técnicos:</h1>
        <div className="aspectos">
          <Link to="https://www.abacol.co/fibraplas_concrete/assets/fibraplas-concrete_libro_baja.pdf">
            <div className="aspectos-tecnicos">
              <AutoStoriesIcon />
              <p>Ver Libro</p>
            </div>
          </Link>

          <Link to="https://www.flickr.com/photos/abacoltyd/albums/72157676918282955">
            <div className="aspectos-tecnicos">
              <AddAPhotoIcon />
              <p>Ver Galería de obras</p>
            </div>
          </Link>

          <Link to="https://www.abacol.co/fibraplas_concrete/assets/ficha-tecnica-fibraplas.pdf">
            <div className="aspectos-tecnicos">
              <AddCircleIcon />
              <p>Ver ficha Técnica</p>
            </div>
          </Link>

          <div className="aspectos-tecnicos" onClick={handleDownloadClick}>
            <WebhookIcon />
            <p>Software de cálculo FPC</p>
          </div>
        </div>
      </div>
    </>
  );
}

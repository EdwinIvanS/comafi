import Button from "@mui/material/Button";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export default function Contact() {
  return (
    <>
      <div
        className="container-1"
        style={{
          background: "#f5f5f5",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <h1>Contactanos</h1>
        <div className="card">
          <SupportAgentIcon />
          <p>
            Hacemos que tu experiencia sea más satisfactoria; atendemos tus
            inquietudes y necesidades en línea, de todo tu proceso de compra y
            tramites con una asesoría especializada.
          </p>
          <Link to="https://docs.google.com/forms/d/1cXcJvvf_aXKBCj8Y-X8zDP6XaFc44VUHVm4xZWopvqA/viewform?edit_requested=true">
            <Button
              className="btn-contact"
              variant="contained"
              style={{ width: "150px", margin: "auto", marginTop: "20px" }}
            >
              Contactar
            </Button>
          </Link>
        </div>

        <div className="card card-margin">
          <div className="map">
            <img src="/ubicacion.jpeg" alt="mapa" />
          </div>
          <h5>
            <strong>Escrìbenos</strong>
          </h5>
          <div className="location">
            <div>
              <WhatsAppIcon />
              <p>
                <strong>WhatsApp : </strong>
                +507 6380-4687
              </p>
            </div>
            <div>
              <AddLocationIcon />
              <p>
                <strong>Dirección : </strong>
                Torre PDC, Costa del Este, Piso 10 Ciudad de Panamá, Panamá
              </p>
            </div>
            <div>
              <SupportAgentIcon />
              <p>
                <strong>Horarios de atención : </strong>
                Lunes a viernes de 08:00 a.m. a 05:00 p.m, sábados 08:00 a.m. a
                03:00 p.m
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

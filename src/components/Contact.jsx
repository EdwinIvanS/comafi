import Button from "@mui/material/Button";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";

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
        <div
          className="card"
          style={{
            maxWidth: "85%",
            margin: "auto",
            padding: "30px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            border: "none",
          }}
        >
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
              Enviar
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  const phoneNumber = "+50763804687";
  const message = "Hola, estoy interesado en sus servicios.";
  const handleWhatsAppClick = () => {
    try {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.location.href = url;
    } catch (error) {
      console.error("Error al abrir el enlace de WhatsApp:", error);
    }
  };

  return (
    <>
      <div className="lineal"></div>
      <div className="container-footer">
        <div className="container-contacto">
          <ul>
            <img src="/comafi.png" alt="logo" />
            <li>© Copyright 2023</li>
          </ul>
        </div>
        <div className="container-legal">
          <h4>Legales</h4>
          <ul>
            <Link to={"/Politics"}>
              <li id="li-datos">
                Política de privacidad y protección de datos personales
              </li>
            </Link>
          </ul>
        </div>
        <div className="container-contacto">
          <h4>Contacto</h4>
          <ul>
            <li>Correo: ventas@comafipanama.com</li>
            <li>Teléfono: +507 6673-5473</li>
            <li>WhatsApp: +507 6380-4687</li>
          </ul>
        </div>
        <div className="container-redes">
          <h4>¡Síguenos en nuestras redes!</h4>
          <div className="icons-redes">
            <Link
              to={
                "https://www.instagram.com/comafipty/?igshid=MzRlODBiNWFlZA%3D%3D"
              }
            >
              <img src="/facebook.png" alt="f" />
            </Link>
            <Link
              to={
                "https://www.instagram.com/comafipty/?igshid=MzRlODBiNWFlZA%3D%3D"
              }
            >
              <img src="/instagram.png" alt="i" />
            </Link>
          </div>
        </div>
      </div>
      <button
        className="shake svelte-pb3e4p"
        onClick={handleWhatsAppClick}
      ></button>
    </>
  );
}

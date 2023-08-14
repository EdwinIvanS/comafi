
export default function Footer() {
  const phoneNumber = "+50763804687"; // Reemplaza esto con el número de teléfono deseado
  const message = "Hola, estoy interesado en sus servicios."; // Opcional: Mensaje predefinido

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
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
            <li>Política de privacidad y protección de datos personales</li>
            <li>Política de ventas, devoluciones y garantías</li>
            <li>Garantía de productos</li>
          </ul>
        </div>
        <div className="container-contacto">
          <h4>Contacto</h4>
          <ul>
            <li>Correo: ventas@conafipanama.com</li>
            <li>Teléfono: +507 6673-5473</li>
            <li>WhatsApp: +507 6380-4687</li>
          </ul>
        </div>
        <div className="container-redes">
          <h4>¡Síguenos en nuestras redes!</h4>
          <div className="icons-redes">
            <img src="/facebook.png" alt="f" />
            <img src="/instagram.png" alt="i" />
            <img src="/linkedin.png" alt="l" />
            <img src="/youtube.png" alt="y" />
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

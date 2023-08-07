
export default function Footer() {
  const phoneNumber = "123456789"; // Reemplaza esto con el número de teléfono deseado
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
            <img src="/icon-comafi.jpeg" alt="logo" />
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
            <li>Correo: servicioalcliente@comafi.com</li>
            <li>Teléfono: 6011234567</li>
            <li>WhatsApp: 300 000 0000</li>
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

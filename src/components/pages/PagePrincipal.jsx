import Header from "../Header";
import Navbar from "../Navbar";
import Carrusel from "../Carrusel";
import Categories from "../Categories";
import Blog from "../Blog";
import Formulario from "../Formulario";
import Footer from "../Footer";

export default function PagePrincipal() {
  return (
    <>
      <Header />
      <Navbar />
      <Carrusel />
      <Categories />
      <Blog />
      <Formulario />
      <Footer />
    </>
  );
}

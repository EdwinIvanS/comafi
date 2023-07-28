import Blog from "./Blog";
import Carrusel from "./Carrusel";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Formulario from "./Formulario";

export default function Main() {
  return (
    <div className="container-main">
      <Header />
      <Navbar />
      <Carrusel />
      <Categories />
      <Blog />
      <Formulario />
      <Footer />
    </div>
  );
}

import Carrusel from "../Carrusel";
import Categories from "../Categories";
import Blog from "../Blog";
import { listCategories } from "../../javascript/list-categories";
import ScrollToTop from "../ScrollToTop";

export default function PagePrincipal() {
  return (
    <>
      <ScrollToTop />
      <Carrusel />
      <Categories listCategories={listCategories} />
      <Blog />
    </>
  );
}

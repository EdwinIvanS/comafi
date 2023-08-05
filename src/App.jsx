import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagePrincipal from "./components/pages/PagePrincipal";
import PageAbout from "./components/pages/PageAbout";
import PageContact from "./components/pages/PageContact";
import PageGallery from "./components/pages/PageGallery";
import PageProducts from "./components/pages/PageProducts";
import Header from "./components/Header";
import AppBarPrincipal from "./components/AppBarPrincipal";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container-main">
        <Header />
        <AppBarPrincipal />
        <Routes>
          <Route path="/" exact={true} element={<PagePrincipal />} />
          <Route path="/AboutUs" element={<PageAbout />} />
          <Route path="/Catalog" element={<PageProducts />} />
          <Route path="/Contact" element={<PageContact />} />
          <Route path="/Gallery" element={<PageGallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

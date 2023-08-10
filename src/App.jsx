import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagePrincipal from "./components/pages/PagePrincipal";
import PageAbout from "./components/pages/PageAbout";
import PageContact from "./components/pages/PageContact";
import PageGallery from "./components/pages/PageGallery";
import PageProducts from "./components/pages/PageProducts";
import Layout from './components/Layout';

function App() {
  return (
    <div className="container-main">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" exact={true} element={<Layout> <PagePrincipal/> </Layout>} />
          <Route path="/AboutUs" element={<Layout> <PageAbout /> </Layout>} />
          <Route path="/Catalog" element={<Layout> <PageProducts /> </Layout>} />
          <Route path="/Contact" element={<Layout> <PageContact /> </Layout>} />
          <Route path="/Gallery" element={<Layout> <PageGallery /> </Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

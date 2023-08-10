import PropTypes from "prop-types";
import Header from "./Header";
import AppBarPrincipal from "./AppBarPrincipal";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-main">
      <Header />
      <AppBarPrincipal />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Categories({ listCategories }) {
  return (
    <div className="container-1">
      <h1>Categorias</h1>
      <div className="container-card">
        {listCategories.map((data) => {
          return (
            <Link to={data.link} key={data.id}>
              <div className="card-1" style={{ padding: "0" }}>
                <img
                  src={data.img}
                  alt="img"
                  style={{ width: "100%", borderRadius: "15px" }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

Categories.propTypes = {
  listCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

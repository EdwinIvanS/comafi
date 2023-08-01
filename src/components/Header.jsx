import { contacto } from "../javascript/list-info";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-header">
      <div className="header-logo">
        <Link to={"/"}>
          <img src="/public/icon-comafi.jpeg" alt="logo" />
        </Link>
      </div>
      <ul className="menu-links">
        {contacto.map((data) => {
          return (
            <li className="nav-link" key={data.id}>
              <div className="icon">
                <data.icon />
              </div>
              <div className="text">
                <p>
                  <strong>{data.name}</strong>
                </p>
                <p>{data.phone}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

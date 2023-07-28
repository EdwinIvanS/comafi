import { contacto } from "../javascript/list-info";

export default function Header() {
  return (
    <div className="container-header">
      <div className="header-logo">
        <img src="/public/icon-comafi.jpeg" alt="logo" />
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

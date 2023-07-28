import { listNav } from "../javascript/list-navbar";

export default function Navbar() {
  return (
    <>
      <div className="container-nabvar">
        <ul>
          {listNav.map((data) => {
            return (
              <li key={data.id}>
                <p>{data.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

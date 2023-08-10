import { listCategories } from "../javascript/list-categories";
export default function Categories() {
  return (
    <div className="container-1">
      <h1>Categorias</h1>
      <div className="container-card">
        {listCategories.map((data) => {
          return (
            <div
              className="card-1"
              key={data.id}
              style={{ padding: "0" }}
            >
              <img
                src={data.img}
                alt="img"
                style={{ width: "100%", borderRadius: "15px" }}
              />
              {/*<p>{data.title}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

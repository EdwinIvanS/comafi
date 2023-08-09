import { listCategories } from "../javascript/list-categories";
export default function Categories() {
  return (
    <div className="container-1">
      <h1>Categorias</h1>
      <div className="container-card">
        {listCategories.map((data) => {
          return (
            <div className="card-1" key={data.id}>
              <img src={data.img} alt="img" />
              {/*<p>{data.title}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

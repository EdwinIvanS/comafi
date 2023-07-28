import { blogs } from "../javascript/list-blog";

export default function Blog() {
  return (
    <div className="container-1">
      <h1>Blog</h1>
      <div className="container-blog">
        {blogs.map((data) => {
          return (
            <div className="card" key={data.id}>
              <img src={data.img} alt="img" />
              <p className="card-title">
                <strong>{data.title}</strong>
              </p>
              <p className="card-publicacion">{data.publicado}</p>

              {/* 
              <p className="card-descripcion">{data.descripcion}</p>
              <button type="button" className="btn btn-success">
                Leer Más
              </button> */}
            </div>
          );
        })}        
      </div>
    </div>
  );
}

import { blogs } from "../javascript/list-blog";

export default function Blog() {
  return (
    <div className="container-1">
      <h1>Blog</h1>
      <div className="container-blog">
        {blogs.map((data) => {
          return (
            <div className="card-Blog" key={data.id}>
              <img className="image" src={data.img} alt="img" />
              <div className="content-Blog">
                <h2>Title</h2>
                <div>
                  <strong>{data.title}</strong>
                </div>
                <a href="#">Continuar</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

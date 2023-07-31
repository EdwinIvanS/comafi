import { blogs } from "../javascript/list-blog";

export default function Blog() {
  return (
    <div className="container-1">
      <h1>Blog</h1>
      <div className="container-blog">
        {blogs.map((data) => {
          return (
            <div className="card proj-imgbx" key={data.id}>
              <img src={data.img} alt="img" />
              <div className="proj-txtx">
                <strong>{data.title}</strong>
              </div>
              {/*
              <p className="card-title">
                <strong>{data.title}</strong>
              </p>
               */}
            </div>
          );
        })}        
      </div>
    </div>
  );
}

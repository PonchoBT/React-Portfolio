import portfolio from "../data/portfolio";
import { Link } from "react-router-dom";
export default function Portafolio() {
  return (
    <div className="container">
      <h1 className="my-4">My Portfolio</h1>
      <div className="row">
        {portfolio.map((portfolio, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="h-100">
              <img
                src={portfolio.imageUrl}
                alt={portfolio.title}
                className="img-fluid"
              />
              <div className="mt-5">
                <h5 className="card-title mt-5">{portfolio.title}</h5>
                <p className="card-text mt-5">{portfolio.description}</p>
                <Link to={portfolio.url} target="_blank">
                  Click
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

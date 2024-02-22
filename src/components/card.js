import Button from "react-bootstrap/Button";
// import Card as InportCard from "react-bootstrap/Card";


function Card({ poster_path, title }) {
  return (
    <div className="card d-flex w-50">
      <img
        className="card-img-top w-100"
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  );
}

export default Card;

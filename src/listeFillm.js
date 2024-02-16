import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import Carte from "./card";
// import SearchBox from "./searchB";

// --------------------------------------------
//
const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

function ListeFillm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  // var page = 1;

  const Recherche = async (event) => {
    setSearchTerm(event.target.value);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error("tocard");
    }
  };

  return (
    <>
      <Row>
        <Col>
      n 
        </Col>
      </Row>
      <div className="d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
// ---------------------------------------------
//
function Movie({ movie }) {
  return (
    <div className="m-5 w-25">
      <div className="card d-flex w-50">
        <img
          className="card-img-top w-100"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ListeFillm;

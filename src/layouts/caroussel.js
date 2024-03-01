import Carousel from "react-bootstrap/Carousel";
import store from "../store";
import React, { useEffect, useState } from "react";

const Carroussel = () => {
  const [lFilm, setlFilm] = useState([]);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { popular } = store.getState().carouselStore;
      setlFilm(popular);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Carousel style={{ width: "100%", height: "20%" }}>
      {lFilm.map((movie) => (
        <Carousel.Item>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overlay}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carroussel;

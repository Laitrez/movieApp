import React, { useEffect, useState } from "react";
import store from "../store";
import * as tmbd from "../api/tmbd";
import Carte from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import { stock } from "./SearchBar/carousel.reducer";
import { useDispatch, useSelector } from "react-redux";

function ListeFillm() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  // const search=useSelector((state)=>state.search.value)
  // const page=useSelector((state)=>state.search.page)
  // const context=useSelector((state)=>state.search.context)
  const { value, page, context } = useSelector(({ search }) => search);
  // test context----------------------------------------

  async function fetchMovie(searchTerme, page, context) {
    console.log(context);
    try {
      let fetchedMovies;
      if (searchTerme) {
        context == "all"
          ? (fetchedMovies = await tmbd.get(searchTerme, page, "multi"))
          : (fetchedMovies = await tmbd.get(searchTerme, page, context));
      } else if (context != "trending") {
        page === undefined
          ? (fetchedMovies = await tmbd.getTrendCont(1, context))
          : (fetchedMovies = await tmbd.getTrendCont(page, context));
      } else {
        page === undefined
          ? (fetchedMovies = await tmbd.getTrend(1))
          : (fetchedMovies = await tmbd.getTrend(page));
      }
      setMovies(fetchedMovies);
      console.log(fetchedMovies);
      dispatch(stock(fetchedMovies));
      setError(false);
    } catch (error) {
      setError(true);
    }
  }
  // test context----------------------------------------
  //
  // legacy---------------------------------------------------
  // async function fetchMovie(searchTerme, page) {
  //   try {
  //     let fetchedMovies;
  //     if (searchTerme) {
  //       fetchedMovies = await tmbd.get(searchTerme, page);
  //     } else {
  //       page === undefined
  //         ? (fetchedMovies = await tmbd.getTrend(1))
  //         : (fetchedMovies = await tmbd.getTrend(page));
  //     }
  //     setMovies(fetchedMovies);
  //     setError(false);
  //   } catch (error) {
  //     setError(true);
  //   }
  // }
  // legacy---------------------------------------------------
  useEffect(() => {
    fetchMovie(value, page, context);
  }, [value, page, context]);
  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     const { value, page, context } = store.getState().search;
  //     fetchMovie(value, page, context);
  //   });
  //   fetchMovie("");
  //   return () => unsubscribe();
  // }, []);
  // useEffect(() => {
  //   // solution avec l'appel au demarrage de la trend :

  //   const unsubscribe = store.subscribe(() => {
  //     const { value, page } = store.getState().search;
  //     // const { page } = store.getState().search;
  //     fetchMovie(value, page);
  //   });
  //   fetchMovie("");
  //   return () => unsubscribe();
  // }, []);
  // legacy---------------------------------------------------
  const Movie = ({ movie }) => {
    return (
      <div className="d-flex flex-wrap m-2  overflow-hidden">
        <Carte
          img={movie.poster_path}
          titre={movie.title}
          desc={movie.overlay}
        />
      </div>
    );
  };

  const Error = () => {
    if (error) return <p>Il y a une erreur</p>;
  };

  return (
    <>
      <Error />
      <div className="d-flex flex-wrap justify-content-center">
        {/* <div className="d-flex justify-content-center"> */}
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default ListeFillm;

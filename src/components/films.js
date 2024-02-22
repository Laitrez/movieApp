import React, { useEffect, useState } from "react";
import axios from "axios";
import store from "../store";
import * as tmbd from "../api/tmbd";
import Card from "./card";

function ListeFillm() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  // var page = 1;

  /*

  // Method 1
  const search = useSelector((state) => state.search.value)

  
  useEffect(() => {
    console.log('search', search)
  }, [search ]) // Maj quand cette variable change !

*/

  useEffect(() => {
    const unsubscribe = store.subscribe(async () => {
      const { value } = store.getState().search

      /*
      // Gestion de l'erreur ??
      const v = await tmbd.get(value)
      setMovies(v)
      */

      tmbd.get(value).then(movies => {
        if (error) setError(false)
        setMovies(movies)
      }).catch(e => setError(true))

    })

    return () => unsubscribe()
  })


  // COmposant Movie
  const Movie = ({ movie }) => {
    return (
      <div className="m-5 w-25">
        <Card {...movie} />
      </div>
    );
  }


  const Error = () => {
    if (error)
      return (
        <p>Il y a une erreur</p>
      )
  }


  return (
    <>
      <Error />
      <div className="d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}


export default ListeFillm;

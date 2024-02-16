import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import store from "../store";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

function SearchFilm() {
  // ----------------------------------------
  //
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  //   ---------------------------------------
  //
  store.subscribe(() => {
    this.setState({
      items: store.getState().items,
    });
  });

  const handleChange = (event) => {
    const { toto } = event.target.value;
    setSearchTerm(toto);
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      dispatch(response);

      setMovies(response.data);
    } catch (error) {
      console.error("tocard");
    }
    dispatch(setSearchTerm(toto));
  };
}
export default SearchFilm;

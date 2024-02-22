import axios from "axios";
import { useSelector } from "react-redux";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

export const get = async (value, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=${page}`
    );

    //   setMovies(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTrend = async () => {
  try {
    const response = await axios.get(
      //   `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&query=${value}`
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );

    //   setMovies(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

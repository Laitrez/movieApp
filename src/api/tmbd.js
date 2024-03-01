import axios from "axios";
import { useSelector } from "react-redux";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

export const get = async (value, page, context) => {
  console.log(context);
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/${context}?api_key=${apiKey}&query=${value}&page=${page}`
    );

    //   setMovies(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTrend = async (page) => {
  try {
    const response = await axios.get(
      //   `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&query=${value}`
      `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`
    );

    //   setMovies(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTrendCont = async (page, context) => {
  try {
    const response = await axios.get(
      //   `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&query=${value}`
      `https://api.themoviedb.org/3/trending/${context}/day?api_key=${apiKey}&page=${page}`
    );

    //   setMovies(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

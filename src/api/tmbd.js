import axios from "axios";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";


export const get = async (value) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}`
        );

        //   setMovies(response.data.results);
        return response.data.results
    } catch (error) {
        throw new Error(error)
    }
};


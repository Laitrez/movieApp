import React from "react";
import axios from "axios";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

export default class ListeFilm extends React.Component {
  state = {
    film: [],
  };

  async componentDidMount() {
    const list = await axios.get(
      `https://api.themoviedb.org/3/movie/?apikey=${apiKey}`
    );
    this.setState(list);
    console.log(list);
  }

  render() {
    return (
      <ul>
        {this.state.film.map((film) => (
        //   <img src="" alt="" />
          <li key={film.id}>{film.name}</li>

        ))}
      </ul>
    );
  }
}

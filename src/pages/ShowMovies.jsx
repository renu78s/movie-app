import React, { useState, useEffect } from "react";
import MoviesCard from "../components/MoviesCard";
import NavBar from "../components/NavBar";
import axios from "axios";
import "./ShowMovies.css";

const ShowMovies = () => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?apikey=30b0b771&s=avatar")
      .then((res) => {
        setMovieData(res.data.Search);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="page_title">{error}</div>
      <h1 className="page_title">movies</h1>
      <div className="movies_container">
        {movieData.map((data) => {
          const { Title, year, imdbID, Type, Poster } = data;
          return (
            <div key={imdbID}>
              <MoviesCard
                Poster={Poster}
                Title={Title}
                year={year}
                Type={Type}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowMovies;

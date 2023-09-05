import React from "react";
import "./MoviesCard.css";
import { Link } from "react-router-dom";

const MoviesCard = (props) => {
  const { Title, year, Type, Poster } = props;

  return (
    <div>
      <div className="card">
        <img src={Poster} className="card-img-top" alt={Title} />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p>{year}</p>
          <p>{Type}</p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/movies" className="btn btn1">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;

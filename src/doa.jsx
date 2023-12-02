import React, { useEffect, useState } from "react";
import { getDoaList } from "./api";
import { Link } from "react-router-dom";

const Doa = () => {
    const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getDoaList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className="movie-wrapper" key={i}>
            {movie.name}
          </div>
      );
    });
  };
  return (
    <>
        <h1>QUR'AN BY DMP</h1>
        <div className="movie-container">
            <PopularMovieList />
        </div>
    </>
  )
}

export default Doa
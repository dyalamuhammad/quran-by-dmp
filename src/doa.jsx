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
 

  const ListDoa = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Link to={`/doa/:id`} key={i} className="movie-wrapper">
          
            <div className="movie-number"> {movie.id}. {movie.name}</div>
           
         
        </Link>
      );
    });
  };
  return (
    <>
        <h1>QUR'AN BY DMP</h1>
        <div className="movie-container">
            <ListDoa />
        </div>
    </>
  )
}

export default Doa
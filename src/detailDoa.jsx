import React, { useEffect, useState } from "react";
import { getDetailDoa  } from "./api";
import { useParams } from "react-router-dom";

const DetailDoa = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const { doaNumber } = useParams();

  
  useEffect(() => {
    getDetailDoa().then((result) => {
      setPopularMovies(result);
      console.log(result);
    });
  }, []);

  
  const PopularMovieList = () => {
    const movie = popularMovies;
    return (
      <div className="movie-detail">
        <div className="movie-title">
          {movie.ayat}
        </div>
      </div>
    );
  };

 
  return (
    <div className="movie-detail">
      <h1>QUR'AN BY DMP</h1>

      <div className="movie-container">
        <PopularMovieList />
      </div>
    </div>
  );
};

export default DetailDoa;

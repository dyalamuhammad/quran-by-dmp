import React, { useEffect, useState } from "react";
import { getSurahList, searchMovie } from "./api";
import { Link } from "react-router-dom";

const Movie = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getSurahList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <Link to={`/detail/${movie.nomor}`} key={i} className="movie-wrapper">
        {/* <div  > */}
          <div className="wrapper-1">
            <div className="movie-number">{movie.nomor}</div>
          </div>
          <div className="wrapper-2">
            <div className="movie-title">
              {movie.nama} | {movie.namaLatin}
            </div>
            <div className="movie-rate">{movie.arti}</div>
          </div>
          <div className="movie-date">{movie.jumlahAyat} Ayat</div>
        {/* </div> */}
        </Link>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };
  return (
    <>
      <h1>QUR'AN BY DMP</h1>
      

      <div className="movie-container">
        
          <PopularMovieList />
        
      </div>
    </>
  );
};

export default Movie;

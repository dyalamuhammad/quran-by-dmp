import React, { useEffect, useState } from "react";
import { getDoaList } from "./api";
import { Link } from "react-router-dom";

const Doa = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [isAyatVisible, setIsAyatVisible] = useState(false);

    const handleButtonClick = () => {
      setIsAyatVisible(true);
    };

  useEffect(() => {
    getDoaList().then((result) => {
      setPopularMovies(result);
    });
  }, []);
 

  const ListDoa = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper-detail" key={i}>

          <div className="movie-number" onClick={handleButtonClick}> {movie.title}</div>
          <div className="doa-arab" id="doa-arab" style={{ display: isAyatVisible ? 'block' : 'none' }}> {movie.arabic}</div>
          <div className="doa-arti" id="doa-arti"> {movie.translation}</div>
        </div>
      

      
           
         
    
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
import React, { useEffect, useState } from "react";
import { getDetail, getDetailAudio, searchMovie } from "./api";
import { useParams } from "react-router-dom";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { ReactNotifications } from "react-notifications-component";

const Detail = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const { surahNumber } = useParams();

  
  useEffect(() => {
    getDetail(surahNumber).then((result) => {
      setPopularMovies(result);
      console.log(result);
    });
  }, [surahNumber]);

  
  const PopularMovieList = () => {
    const movie = popularMovies;
    return (
      <div className="movie-detail">
        <div className="movie-title">
          {movie.namaLatin}
        </div>
        <div className="movie-rate">{movie.arti}</div>

        
          {popularMovies.ayat &&
            popularMovies.ayat.map((ayat, i) => (
              <div key={i}>
                <div className="movie-wrapper-detail">
                  
                  <div className="wrapper-detail-1">
                    <audio src={ayat.audio['05']} controls id="song"></audio>
                
                    
                    <div className="quran-arab">
                      {ayat.teksArab}
                      
                      </div>
                  </div>
                  <div className="wrapper-detail-1">
                  <div className="quran-ayat">{ayat.nomorAyat}</div>
                  </div>
                  <div className="quran-arti">{ayat.teksIndonesia}</div>
                </div>
               </div>
            ))}
        
      </div>
    );
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
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

export default Detail;

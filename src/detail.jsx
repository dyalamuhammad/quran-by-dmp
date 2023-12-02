import React, { useEffect, useState } from "react";
import { getDetail, getDetailAudio, searchMovie } from "./api";
import { useParams } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";

const Detail = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const { surahNumber } = useParams();
  // Mengakses URL audio untuk pembaca ke-5
  
  useEffect(() => {
    getDetail(surahNumber).then((result) => {
      setPopularMovies(result);
      console.log(result);
    });
  }, [surahNumber]);

  
  const PopularMovieList = () => {
    const movie = popularMovies;
    const audioUrlQari1 = popularMovies[0]?.audioFull?.['01'];
    return (
      <div className="movie-detail">
        <div className="movie-title">
          {movie.namaLatin}
        </div>
        <div className="movie-rate">{movie.arti}</div>
        <div className=""><CiPlay1 /></div>
        <p>{audioUrlQari1}</p>
        <audio src={popularMovies.audioFull['05']} controls></audio>
        {/* <audio src={movie.audioFull[05]} autoPlay controls></audio> */}

        
          {popularMovies.ayat &&
            popularMovies.ayat.map((ayat, i) => (
              <div key={i}>
                <div className="movie-wrapper-detail">
                  <div className="wrapper-detail-1">
                    <audio src={ayat.audio['05']} controls></audio>
                    <div className="quran-arab">
                      {ayat.teksArab}
                    <div className="quran-ayat">{ayat.nomorAyat}</div>
                      
                      </div>
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
      {/* <AudioPlayer audioUrl={audioUrlQari5} /> */}
        <PopularMovieList />
      </div>
    </div>
  );
};

export default Detail;

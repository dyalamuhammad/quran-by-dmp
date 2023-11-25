import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./movie";
import Detail from "./detail";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Al-Qur'an by DMP";
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <head>
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          </head>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/surah' element={<Movie />}/>
            <Route path='/detail/:surahNumber' element={<Detail />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

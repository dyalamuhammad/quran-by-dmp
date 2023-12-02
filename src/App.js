import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quran from "./quran";
import Detail from "./detail";
import { useEffect } from "react";
import Doa from "./doa";

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
            <Route path='/doa' element={<Doa />}/>
            <Route path='/surah' element={<Quran />}/>
            <Route path='/detail/:surahNumber' element={<Detail />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

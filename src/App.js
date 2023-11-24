import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./movie";
import Detail from "./detail";

const App = () => {
  

  return (
    <div className="App">
      <header className="App-header">
        <Router>
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

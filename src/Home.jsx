import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    const navigate = useNavigate()
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
      const currentHour = new Date().getHours();
  
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Selamat Pagi');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Selamat Siang');
      } else {
        setGreeting('Selamat malam');
      }
    }, []);
  return (
    // <>
    //   <Navbar className="bg-dark">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <img
    //           alt=""
    //           src="public/quran_logo.png"
    //           width="30"
    //           height="30"
    //           className="d-inline-block align-top"
    //         />{' '}
    //         React Bootstrap
    //       </Navbar.Brand>
    //     </Container>
    //   </Navbar>
    // </>
    <div className="movie-container">
      
    
      <div className="greet">{greeting}</div>
        <h1>QUR'AN BY DMP</h1>
        <p>Jangan lupa baca qur'an setiap hari yah 😊</p>
        <button onClick={() => navigate('/doa')} className='btn-movie'>DOA</button>
        <button onClick={() => navigate('/surah')} className='btn-movie'>NGAJI</button>
    <div className="footer">
        <p>API From <i>equran</i></p>
    </div>
    </div>
  )
}

export default Home

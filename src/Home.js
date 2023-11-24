import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>QUR'AN BY DMP</h1>
        <p>Jangan lupa baca qur'an setiap hari yah 😊</p>
        <button onClick={() => navigate('/movie')} className='btn-movie'>NGAJI</button>
    <div className="footer">
        <p>API From <i>equran</i></p>
    </div>
    </div>
  )
}

export default Home

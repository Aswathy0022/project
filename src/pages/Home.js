import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/assests/BannerImage[114].png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: 'BannerImage[114].png'}} >
     <div className='headerContainer'>
        <h1>kream</h1>
        <p>A Royal Experience of Taste </p>
        <Link to='/menu'>
        <button>ORDER NOW</button>
        </Link>
     </div>
    </div>
  )
}

export default Home
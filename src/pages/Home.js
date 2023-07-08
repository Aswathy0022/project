import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/BannerImage.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: 'url($(BannerImage))'}} >
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

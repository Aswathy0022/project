import '../App.css';
import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/BannerImage.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' >
     {/* style={{backgroundImage: 'url($(BannerImage))'}}  */}
     <div className='headerContainer'>
        <p style={{marginTop:1}}><h1><b>Kream</b></h1></p>

        <p style={{marginTop:1}}><i><h6> Royal Experience of Taste</h6></i></p>
        <Link to='/menu'>
        <button>ORDER NOW</button>
        </Link>
     </div>
    </div>
  )
}

export default Home

import React from 'react'
import "../../components/banner/index.css"
import tech_for_teens from '../../images/rubixe_tech_for_teens.jpg'
import banner_logo from '../../images/banner_logo.png'
function Banner() {
  return (
    <div className='banner'>
        <img className='img_tech_for_teens' src={tech_for_teens} alt="banner_image"/>
        <img className='banner_logo' src={banner_logo} alt="banner logo" />
        <h2 className='banner__description'>CARVING FUTURE TECHNOLOGY PROFESSONALS, <br/> OUT OF YOUNG MINDS</h2>
    </div>
  )
}

export default Banner
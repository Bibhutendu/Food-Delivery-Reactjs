import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
assets
function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer-content'>
            <div className='Footer-left' >
                <img src={assets.logo} alt=''/> 
                <p>Food delivery company where you will your mother handmade food</p>
                <div className='Footer-social-icon'>
                    <img src={assets.twitter_icon }alt=''/>
                    <img src={assets.facebook_icon }alt=''/>
                    <img src={assets.linkedin_icon}alt=''/>
                </div>
            </div>
            <div className='Footer-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='Footer-right'>
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 8946378293</li>
                    <li>contacttomato@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />

    </div>
  )
}

export default Footer
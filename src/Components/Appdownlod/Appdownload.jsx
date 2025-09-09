import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Appdownload.css'
function Appdownload() {
  return (
    <div className='Appdownload'>
        <h3>Download Now</h3>
        <h3>Download App For Better Experinece</h3>
        <div className='platform-download'>
            <img src={assets.app_store} alt="" className='Playstore'/>
            <img src={assets.play_store} alt="" className='Appstore'/>
        </div>
        
    </div>
  )
}

export default Appdownload
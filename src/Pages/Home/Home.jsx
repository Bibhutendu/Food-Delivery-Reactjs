import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Food_display from '../../Components/Food_display/Food_display'
import Appdownload from '../../Components/Appdownlod/Appdownload'


function Home() {
    const [category,setCategory] = useState("ALL")
  return (
    <div>
        Home
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <Food_display category = {category}/>
        <Appdownload/>
    </div>
  )
}

export default Home
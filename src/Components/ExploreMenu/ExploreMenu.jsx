import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'
function ExploreMenu({category,setCategory}) {
    const handleCategory = (item) =>{
        setCategory(category === item.menu_name?"ALL":item.menu_name)
        console.log(category)
    }
  return (
    <div className='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose a diverse menu featuring a delectable array</p>
        <div className='explore-menu-list'> 
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={() => handleCategory(item)} key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} className={category===item.menu_name?"active":""}alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr></hr>  
    </div>
  )
}

export default ExploreMenu
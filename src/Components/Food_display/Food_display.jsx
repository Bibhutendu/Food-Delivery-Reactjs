import React, { useContext } from "react";
import "./Food_display";
import { food_list } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";
import './Food_display.css'
function Food_display({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category==='ALL' || category===item.category){
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description = {item.description}
                category = {item.category}
              />
            );
          }
         
        })}
      </div>
    </div>
  );
}

export default Food_display;

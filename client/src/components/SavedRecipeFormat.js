import React, { useState, useEffect } from "react";
import FetchNutrition from "./FetchNutrition";
import { Button } from 'grommet';


const Item = ({ food }) => {
  const [OpenNutrition, SetOpenNutrition] = useState(false);

  return (
    <div>
        <h4>{food.name}</h4>
        <p>Description of the dish: {food.description}</p>
        <p>Allergies to be aware of: {food.allergens}</p>
        <button onClick={() => SetOpenNutrition(!OpenNutrition)}>Display nutritional information</button>
        {OpenNutrition && <FetchNutrition query={food.name} />}
        <button onClick={() => { food.menu.splice(0, food.menu.length) }}> Remove from Menu </button>
    </div>
  );
};
export default Item;



import React, { useState, useEffect } from "react";
import FetchNutrition from "./FetchNutrition";
import { Button } from 'grommet';


const Item = ({ food }) => {
  const [OpenNutrition, SetOpenNutrition] = useState(false);

  return (
    <div>
      <h4>{food.name}</h4>
      <p>Description of the dish: {food.description}</p>

      <p>Full cooking method</p>
      <ol>
          {food.FullMethod.map((fullers,fulton) => (
            <li key={fulton}>
            {fullers}
            </li>
          ))}
        </ol>

      <p>Allergies to be aware of: {food.AllergyTrigger}</p>
      <button onClick={() => SetOpenNutrition(!OpenNutrition)}>Display/Hide nutritional information</button>
      {OpenNutrition && <FetchNutrition query={food.name} />}
      <button onClick={() => { food.Saveditem.splice(0, food.Saveditem.length) }}> Remove from Saveditem </button>
    </div>
  );
};
export default Item;



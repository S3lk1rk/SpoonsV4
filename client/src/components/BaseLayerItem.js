import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Review from "./MyReviewComponent";

const Item = ({ food }) => {
  const [OpenNutrition, SetOpenNutrition] = useState(false);

  return (
    <div>

      <Accordion.Header> {food.name}</Accordion.Header>

      <Accordion.Body>
        <p>{food.category}</p>
        <p>{food.description}</p>
        <p>{food.AllergyTrigger}</p>
        <button onClick={() => SetOpenNutrition(!OpenNutrition)}>Display/Hide nutritional information</button>
        {OpenNutrition && <FetchNutrition query={food.name} />}
        <p><Review food={food} /></p>
        <button onClick={() => food.Saveditem.splice(0, food.Saveditem.length, "favourite") && console.log(food.Saveditem)}> Add to my saved recipes</button>
        <button onClick={() => food.shopping.splice(0, food.shopping.length, "inshoplist") && console.log(food.shopping)}> Add to my shopping list </button>
      </Accordion.Body>
    </div>

  );
};
export default Item;

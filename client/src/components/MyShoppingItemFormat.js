import React from "react";
const Item = ({ food }) => {
  return (
    <div>
      <h4>{food.name}</h4>
      <p>Description of the final product: {food.description}</p>
      <p>Ingredients</p>
      {food.ingredients.map((item, i) => {
        return <div>{item.ItemIngredient}  Quantity: {item.ItemQuantity}</div>
      })}
      <br></br>
      <p>Allergies to be aware of: {food.AllergyTrigger} </p>
      <button onClick={() => { food.shopping.splice(0, food.shopping.length) }}> Remove from Shopping List </button>
    </div>
  );
};
export default Item;
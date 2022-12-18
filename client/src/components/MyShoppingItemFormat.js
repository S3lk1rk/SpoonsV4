import React from "react";
const Item = ({ food }) => {
  return (
    <div>
        <h4>{food.name}</h4>
        <p>Description of the final product: {food.description}</p>
        {food.ingredients.map((item,i) =>{
                    return <div>Ingredient: {item.food_ingredient}  Quantity: {item.food_ingredientquantity}</div>            
                })}
                <br></br>
        <p>Allergies to be aware of: {food.allergens}</p>
        <button onClick={() => { food.shopping.splice(0, food.shopping.length)}}> Remove from Shopping List </button>
    </div>
  );
};
export default Item;
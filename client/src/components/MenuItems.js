import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";
import Menuitem from "./SavedRecipeFormat"
import Shoppingitem from "./MyShoppingItemFormat"

const MenuItems = (params) => {
  const items = params.items
  return (
    <Accordion style={{width:50+'%'}}>
      <p>show me the money</p>
      {items.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            {params.type === "DisplayLocally" && <Item food={food} />}
            {params.type === "inshoplist" && <Shoppingitem food={food} />}
            {params.type === "favourite" && <Menuitem food={food} />}
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default MenuItems;

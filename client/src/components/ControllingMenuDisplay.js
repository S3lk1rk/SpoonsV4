import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Item from "./BaseLayerItem";
import Menuitem from "./SavedRecipeFormat"
import Shoppingitem from "./MyShoppingItemFormat"

const MenuItems = (params) => {
  const items = params.items
  return (
    <Accordion style={{ width: 50 + '%' }}>
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

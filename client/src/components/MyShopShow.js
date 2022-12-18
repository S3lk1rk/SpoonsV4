import React from "react";
//import CatagoryFilter from "./CategoryFilter"
import Filtration from "./MyShoppingListFilter"
function shoppinglist({ details }) {
    const shoppingfilter = details.filter((entry) => {
        return entry.shopping.includes("inshoplist");
    });
    return (
        <div>
           
            <Filtration details={shoppingfilter} type={"inshoplist"}/>
        </div>
        
    );
}
export default shoppinglist;
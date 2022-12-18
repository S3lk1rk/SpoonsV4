import React from "react";
//import CatagoryFilter from "./CategoryFilter"
import Filtration from "./MyShoppingListFilter"
function shoppinglist({ details }) {
    const shoppingfilter = details.filter((entry) => {
        return entry.shopping.includes("shopping");
    });
    return (
        <div>
           
            <Filtration details={shoppingfilter} type={"shopping"}/>
        </div>
        
    );
}
export default shoppinglist;
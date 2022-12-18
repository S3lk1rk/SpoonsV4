import React, { useEffect, useState, useReducer } from "react";
import MenuItems from "./ControllingMenuDisplay";
//import CatagoryFilter from "./CategoryFilter"
import SavedItems from "./SavedFilter";
function Search({ details }) {

    const menufilter = details.filter((entry) => {
        return entry.menu.includes("favourite");
    });

    //use entry.menu = [] to know that the array is empty

    return (
        <div>
            {<SavedItems details={menufilter} type={"favourite"} />}
        </div>

    );
}
export default Search;

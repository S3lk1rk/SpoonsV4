import React, { useEffect, useState, useReducer } from "react";
import MenuItems from "./ControllingMenuDisplay";
//import CatagoryFilter from "./CategoryFilter"
import SavedItems from "./SavedFilter";
function Search({ details }) {

    const Saveditemfilter = details.filter((entry) => {
        return entry.Saveditem.includes("favourite");
    });

    return (
        <div>
            {<SavedItems details={Saveditemfilter} type={"favourite"} />}
        </div>

    );
}
export default Search;

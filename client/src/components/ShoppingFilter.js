import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";

function Search(params) {
  const details = params.details

  console.log(details)

  const [searchField, setSearchField] = useState("");
  const [displayData, setDisplayData] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  const combinedFiltered = details.filter((entry) => {
    console.log(entry)
    return entry?.name?.toLowerCase().includes(searchField.toLowerCase()) &&
      entry?.ingredients?.some((item) => { return item?.food_ingredient?.includes(descriptionField) })

  });

  useEffect(() => {
      setDisplayData(combinedFiltered)
    })

  return (
    <div>
      <h3>Expand to view the ingredients to purchase</h3>
      <p>Expand the accordion to view the ingredients to purchase</p>
      <p>or to remove from the list</p>
      {displayData && <>
        {params.type === "shopping" && <MenuItems type={"shopping"} items={displayData} />}
      </>}
    </div>


  );

}
export default Search;
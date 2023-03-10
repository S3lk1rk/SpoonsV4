import React, { useState, useEffect } from "react";
import MenuItems from "./ControllingMenuDisplay";

function Search(params) {
  const details = params.details

  console.log(details)

  const [searchField, setSearchField] = useState("");
  const [displayData, setDisplayData] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  const combinedFiltered = details.filter((entry) => {
    console.log(entry)
    return entry?.name?.toLowerCase().includes(searchField.toLowerCase()) &&
      entry?.ingredients?.some((item) => { return item?.ItemIngredient?.includes(descriptionField) })

  });

  useEffect(() => {
    setDisplayData(combinedFiltered)
  })

  return (
    <div>
      <h3>A collection of your saved dishes</h3>
      <p>when removing from the list it will not automatically disappear, however to refresh navigate home then back to this page</p>
      {displayData && <>
        {params.type === "favourite" && <MenuItems type={"favourite"} items={displayData} />}
      </>}
    </div>


  );

}
export default Search;
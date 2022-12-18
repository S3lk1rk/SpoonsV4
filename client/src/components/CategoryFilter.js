import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";

function Search(params) {
  const details = params.details

  console.log(details)

  const [searchField, setSearchField] = useState("");
  const [filterLactose, setFilterLactose] = useState(false);
  const [filterGluten, setFilterGluten] = useState(false);
  const [filterNuts, setFilterNuts] = useState(false);
  const [displayData, setDisplayData] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  const combinedFiltered = details.filter((entry) => {
    console.log(entry)
    return entry?.name?.toLowerCase().includes(searchField.toLowerCase()) &&
      entry?.ingredients?.some((item) => { return item?.food_ingredient?.includes(descriptionField) })

  });

  const LactoseData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Lactose")
    })

  }
  const glutenData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Gluten")
    })

  }
  const nutsData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Nuts")
    })

  }

  useEffect(() => {
    let result = combinedFiltered;
    if (!filterLactose && !filterGluten && !filterNuts) {
      setDisplayData(combinedFiltered)
    }

    else {

      if (filterLactose) {
        result = LactoseData(result)
      }
      if (filterGluten) {
        result = glutenData(result)
      }
      if (filterNuts) {
        result = nutsData(result)
      }
      setDisplayData(result)
    }
  }, [searchField, descriptionField, filterLactose, filterGluten, filterNuts])


  return (
    <div>
      <div> <input
        className="form-control"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setSearchField(e.target.value)}
      /> </div>

      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search Recipe Descriptions"
          onChange={(e) => setDescriptionField(e.target.value)}
        />
      </div>

      <div> <label> Lactose </label> <input type="checkbox" value={filterLactose} onClick={() => setFilterLactose(!filterLactose)} /></div>
      <div> <label> Gluten </label> <input type="checkbox" value={filterGluten} onClick={() => setFilterGluten(!filterGluten)} /></div>
      <div> <label> Nuts </label> <input type="checkbox" value={filterNuts} onClick={() => setFilterNuts(!filterNuts)} /></div>

      {displayData && <>
        {params.type === "recipe" && <MenuItems type={"recipe"} items={displayData} />}
        {params.type === "shopping" && <MenuItems type={"shopping"} items={displayData} />}
        {params.type === "menu" && <MenuItems type={"menu"} items={displayData} />}
      </>}
    </div>


  );

}
export default Search;
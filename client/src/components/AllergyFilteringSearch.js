import React, { useState, useEffect } from "react";
import MenuItems from "./ControllingMenuDisplay";

function Search(params) {
  const details = params.details

  console.log(details)

  const [searchField, setSearchField] = useState("");
  const [filterLactose, setFilterLactose] = useState(false);
  const [filterWheat, setFilterWheat] = useState(false);
  const [filterFish, setFilterFish] = useState(false);
  const [filterEggs, setFilterEggs] = useState(false);
  const [displayData, setDisplayData] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [showingredientsearch, setShowIngredientSearch] = useState(false);

  const combinedFiltered = details.filter((entry) => {
    console.log(entry)
    return entry.name.toLowerCase().includes(searchField.toLowerCase()) &&
      entry.ingredients.some((item) => { return item.ItemIngredient.includes(descriptionField) })

  });


  const LactoseData = (data) => {
    return data.filter((entry) => {
      return !entry.AllergyTrigger.includes("Lactose")
    })

  }
  const WheatData = (data) => {
    return data.filter((entry) => {
      return !entry.AllergyTrigger.includes("Wheat")
    })

  }
  const FishData = (data) => {
    return data.filter((entry) => {
      return !entry.AllergyTrigger.includes("Fish")
    })

  }
  const EggsData = (data) => {
    return data.filter((entry) => {
      return !entry.AllergyTrigger.includes("Eggs")
    })

  }

  useEffect(() => {
    let result = combinedFiltered;
    if (!filterLactose && !filterWheat && !filterFish && !filterEggs) {
      setDisplayData(combinedFiltered)
    }

    else {

      if (filterLactose) {
        result = LactoseData(result)
      }
      if (filterWheat) {
        result = WheatData(result)
      }
      if (filterFish) {
        result = FishData(result)
      }
      if (filterEggs) {
        result = EggsData(result)
      }
      setDisplayData(result)
    }
  }, [searchField, descriptionField, filterLactose, filterWheat, filterFish, filterEggs])


  return (
    <div className="centre">


      <div><p>Please select your allergies and the dishes will be filtered to exlude them.</p></div><div className="flexAllergy">
        <div> <label> Lactose </label> <input type="checkbox" value={filterLactose} onClick={() => setFilterLactose(!filterLactose)} /></div>
        <div> <label> Wheat </label> <input type="checkbox" value={filterWheat} onClick={() => setFilterWheat(!filterWheat)} /></div>
        <div> <label> Fish </label> <input type="checkbox" value={filterFish} onClick={() => setFilterFish(!filterFish)} /></div>
        <div> <label> Eggs </label> <input type="checkbox" value={filterEggs} onClick={() => setFilterEggs(!filterEggs)} /></div>
      </div>

      <div className="flexSearchbar">

        <div className="mainSearch">
          <input
            className="form-control"
            type="text"
            placeholder="Start searching by entering a recipe name ..."
            onChange={(e) => setSearchField(e.target.value)}
          />

        </div>
        <div className="flexSlider">

          <div className="sliderwid">
            <label className="switch">
              <input type="checkbox" value={showingredientsearch} onClick={() => setShowIngredientSearch(!showingredientsearch)} />
              <span className="slider round"></span>
            </label>
            <p>Ingredient search</p>
          </div>

          {showingredientsearch && <div className="flexIngredients">
            <input id="dave"
              className="form-control"
              type="text"
              placeholder="Search Recipe Ingredients"
              onChange={(e) => setDescriptionField(e.target.value)}
            />
          </div>}
        </div>
      </div >


      {displayData && <>
        {params.type === "DisplayLocally" && <MenuItems type={"DisplayLocally"} items={displayData} />}
      </>}
    </div>


  );

}
export default Search;
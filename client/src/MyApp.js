import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledLayout from "./components/Navigation";
import Home from "./components/Homepage";
import CategoryFilter from "./components/AllergyFilteringSearch"
import Item from "./components/BaseLayerItem";
import NoPage from "./components/A404Page";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuFilter from "./components/SavedListShow"
import ShoppingFilter from "./components/MyShopShow"

import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';



export default function App() {

  const [foods, setFoods] = useState([{

    id: "",
    name: "",
    description: "",
    category: "",
    ingredients: [],
    allergens: [],
    review: [],
    menu: [],
    shopping: [],
    preview: [],
  }]);

  const touchData = useCallback(() => {

    fetch("/recipe")
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setFoods(incomingData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    touchData();
  }, [touchData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyledLayout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<CategoryFilter details={foods} type={"DisplayLocally"} />} >
            <Route path=":itemId" element={<Item items={foods} />} />
          </Route>
          <Route path="/savedrecipe" element={<MenuFilter details={foods} />}>
          </Route>
          <Route path="/shopping" element={<ShoppingFilter details={foods} />}>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

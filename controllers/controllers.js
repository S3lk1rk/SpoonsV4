
const recipeDAO = require("../models/recipeModel");
const recipe = new recipeDAO({ filename: "recipe.db", autoload: true });


exports.newList = function (req, res) {
  recipe.init();
  res.redirect("/");
};

exports.listRecipe = function (req, res) {
  recipe.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

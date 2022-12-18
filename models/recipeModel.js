const nedb = require("nedb");

class recipe {
    constructor(PathToRecipe) {
        console.log(PathToRecipe);
        if (PathToRecipe) {
            this.recipe = new nedb(PathToRecipe);
            console.log("recipe connected to " + PathToRecipe);
            PathToRecipe;
        } else {
            this.recipe = new nedb();
        }
    }
    init() {
        this.recipe.insert({
            id: "1",
            name: "carrot cake",
            description: "Made with love and care by our ",
            category: "dessert",
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz", }],
            allergens: ["Lactose", "Gluten", "Nuts"],
            review: [],
            menu: [],
            shopping: [],
            preview: [{
                name: "Fred",
                rating: "5",
                comment: "An excellent meal, would buy again",
            }],
        });
        this.recipe.insert({
            id: "2",
            name: "sandwiches",
            description: "with a variety of fillings",
            category: ("starter and side"),
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz", }],
            allergens: ["Lactose", "Gluten"],
            review: [],
            menu: [],
            shopping: [],
            preview: [{
                name: "Fred",
                rating: "5",
                comment: "An excellent meal, would buy again",
            }],

        });
        this.recipe.insert({
            id: "3",
            name: "salad",
            description: "uses seasonal local produce",
            category: "side",
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz", }],
            allergens: ["Nuts"],
            review: [],
            menu: [],
            shopping: [],
            preview: [{
                name: "Fred",
                rating: "5",
                comment: "An excellent meal, would buy again",
            }],
        });
        this.recipe.insert({
            id: "4",
            name: "hot chocolate",
            description: "with fully fat or skimmed milk",
            category: "drinks",
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz", }],
            allergens: "",
            review: [],
            menu: [],
            shopping: [],
            preview: [{
                name: "Fred",
                rating: "5",
                comment: "An excellent meal, would buy again",
            }],
        });
        this.recipe.insert({
            id: "5",
            name: "chocolate cake",
            description: "with cream",
            category: "dessert",
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz", }],
            allergens: "",
            review: [],
            menu: [],
            shopping: [],
            preview: [{
                name: "Fred",
                rating: "5",
                comment: "An excellent meal, would buy again",
            }],
        });
    }

    getAllEntries() {
        return new Promise((resolve, reject) => {
            this.recipe.find({}, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log("function all() returns: ", entries);
                }
            });
        });
    }
}
module.exports = recipe;

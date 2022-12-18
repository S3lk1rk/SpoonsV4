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
            description: "Delight friends with an afternoon tea that includes this easy carrot cake. You can bake the cake, freeze it and just drizzle over the icing on the day",
            category: "dessert",
            ingredients: [{ ItemIngredient: "light muscovado sugar", ItemQuantity: "175g" }, { ItemIngredient: "sunflower oil", ItemQuantity: "175ml" }, { ItemIngredient: "large eggs, lightly beaten", ItemQuantity: "3" }, { ItemIngredient: "grated carrot", ItemQuantity: "140g (about 3 medium)" }, { ItemIngredient: "raisins", ItemQuantity: "100g" }, { ItemIngredient: "large orange, zested", ItemQuantity: "1" }, { ItemIngredient: "self-raising flour", ItemQuantity: "175g" }, { ItemIngredient: "bicarbonate of soda", ItemQuantity: "1 tsp" }, { ItemIngredient: "ground cinnamon", ItemQuantity: "1 tsp" }, { ItemIngredient: "grated nutmeg", ItemQuantity: "½ tsp (freshly grated will give you the best flavour)" }, { ItemIngredient: "icing sugar", ItemQuantity: "175g" }, { ItemIngredient: "orange juice", ItemQuantity: "1½-2 tbsp" }],
            AllergyTrigger: ["Wheat", "Eggs"],
            FullMethod: ["Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of an 18cm square cake tin with baking parchment.","Tip the sugar, sunflower oil and eggs into a big mixing bowl. Lightly mix with a wooden spoon. Stir in the carrots, raisins and orange zest.","Sift the flour, bicarbonate of soda, cinnamon and nutmeg into the bowl. Mix everything together, the mixture will be soft and almost runny.","Pour the mixture into the prepared tin and bake for 40-45 mins or until it feels firm and springy when you press it in the centre.","Cool in the tin for 5 mins, then turn it out, peel off the paper and cool on a wire rack. (You can freeze the cake at this point if you want to serve it at a later date.)","Beat the icing sugar and orange juice in a small bowl until smooth – you want the icing about as runny as single cream. Put the cake on a serving plate and boldly drizzle the icing back and forth in diagonal lines over the top, letting it drip down the sides.",],
            Saveditem: [],
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
            ingredients: [{ ItemIngredient: "flour", ItemQuantity: "800g/1lb 14oz", }],
            AllergyTrigger: ["Lactose", "Wheat"],
            FullMethod: ["first","Second","Third","fourth","fifth"],
            Saveditem: [],
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
            ingredients: [{ ItemIngredient: "Butter", ItemQuantity: "800g/1lb 14oz", }],
            AllergyTrigger: ["Fish"],
            FullMethod: ["first","Second","Third","fourth","fifth"],
            Saveditem: [],
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
            ingredients: [{ ItemIngredient: "flour", ItemQuantity: "800g/1lb 14oz", }],
            AllergyTrigger: ["Eggs"],
            FullMethod: ["first","Second","Third","fourth","fifth"],
            Saveditem: [],
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
            ingredients: [{ ItemIngredient: "flour", ItemQuantity: "800g/1lb 14oz", }],
            AllergyTrigger: ["Wheat"],
            FullMethod: ["first","Second","Third","fourth","fifth"],
            Saveditem: [],
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

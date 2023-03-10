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
            FullMethod: ["Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of an 18cm square cake tin with baking parchment.", "Tip the sugar, sunflower oil and eggs into a big mixing bowl. Lightly mix with a wooden spoon. Stir in the carrots, raisins and orange zest.", "Sift the flour, bicarbonate of soda, cinnamon and nutmeg into the bowl. Mix everything together, the mixture will be soft and almost runny.", "Pour the mixture into the prepared tin and bake for 40-45 mins or until it feels firm and springy when you press it in the centre.", "Cool in the tin for 5 mins, then turn it out, peel off the paper and cool on a wire rack. (You can freeze the cake at this point if you want to serve it at a later date.)", "Beat the icing sugar and orange juice in a small bowl until smooth – you want the icing about as runny as single cream. Put the cake on a serving plate and boldly drizzle the icing back and forth in diagonal lines over the top, letting it drip down the sides.",],
            Saveditem: [],
            shopping: [],
            preview: [{
                name: "Dave",
                rating: "9",
                comment: "I love carrots, but this takes them to a new level",
            }],
        });
        this.recipe.insert({
            id: "2",
            name: "panuozzo sandwich",
            description: "Make your own baguettes and pesto to make these pizza-inspired sandwiches for the whole family. They're surprisingly quick and easy to make and are great for lunch or a light dinner",
            category: ("starter and side"),
            ingredients:
                [
                    { ItemIngredient: "strong white bread flour, plus extra for dusting", ItemQuantity: "300g" },
                    { ItemIngredient: " fast-action dried yeast", ItemQuantity: "3g (about half a sachet)" },
                    { ItemIngredient: "olive oil", ItemQuantity: "1 tbsp " },
                    { ItemIngredient: "tomato, halved and sliced", ItemQuantity: "1 " },
                    { ItemIngredient: "cooked ham", ItemQuantity: "4 slices " },
                    { ItemIngredient: "mozzarella ball, sliced and seasoned", ItemQuantity: "150g " },
                    { ItemIngredient: " rocket (optional)", ItemQuantity: "small handful" },
                    { ItemIngredient: "pesto", ItemQuantity: " 6 tbsp" },
                    { ItemIngredient: "olive oil", ItemQuantity: "1 tbsp" },
                ],
            AllergyTrigger: ["Lactose", "Wheat"],
            FullMethod: ["Put the flour in a large bowl, then stir in the yeast and a large pinch of salt. Make a well in the centre, pour in 175ml warm water and the oil and bring together with a wooden spoon to make a soft, fairly wet dough. Turn out onto a lightly floured surface and knead for 5-8 mins until smooth. Divide the dough into four balls and arrange on a floured tray, well spaced apart. Cover with a tea towel and set aside for about 40 mins-1 hr until doubled in size.", "Heat the oven to 240C/220C fan/gas 8 and put a baking tray in the oven to heat up. Roll the dough balls out on a floured surface into long baguette sticks about 22-25cm long, place on the hot tray and bake for 10-12 mins until puffed up and golden, then leave to cool. Can be made a few hours ahead of baking.", "To assemble, split the bread down one side and neatly layer in the tomato, ham, mozzarella and rocket, if using. Mix the pesto with the olive oil, drizzle over, halve and serve."],
            Saveditem: [],
            shopping: [],
            preview: [{
                name: "Jamie",
                rating: "7",
                comment: "My go to sandwhich",
            }],

        });
        this.recipe.insert({
            id: "3",
            name: "fish curry ",
            description: "This colourful hake and prawn one-pot has Thai and Indian inspired flavours and is quick enough for midweek - ready in under 30 minutes",
            category: "main",
            ingredients: [{ ItemIngredient: "vegetable oil", ItemQuantity: "1 tbsp", },
            { ItemIngredient: "onion", ItemQuantity: "1 finely chopped", },
            { ItemIngredient: "ginger", ItemQuantity: "thumb-sized piece, finely grated", },
            { ItemIngredient: "garlic cloves", ItemQuantity: "3 crushed", },
            { ItemIngredient: "shrimp paste", ItemQuantity: "1 tsp", },
            { ItemIngredient: "small red chilli", ItemQuantity: "shredded (deseeded if you don't like it too hot)", },
            { ItemIngredient: "lemongrass stalks", ItemQuantity: "split, then bruised with a rolling pin", },
            { ItemIngredient: "medium curry powder", ItemQuantity: "1 heaped tbsp", },
            { ItemIngredient: "light muscovado sugar", ItemQuantity: "1 heaped tbsp", },
            { ItemIngredient: "small bunch coriander", ItemQuantity: "stems finely chopped", },
            { ItemIngredient: "coconut milk", ItemQuantity: "400g", },
            { ItemIngredient: "skinless hake fillets, cut into rectangles, roughly credit card size", ItemQuantity: "450g", },
            { ItemIngredient: "frozen raw whole prawns", ItemQuantity: "220g", },
            { ItemIngredient: "lime", ItemQuantity: "1 halved", },
            { ItemIngredient: "coooked rice", ItemQuantity: "enough to serve", },],
            AllergyTrigger: ["Fish"],
            FullMethod: ["Heat the oil in a wide, lidded frying pan, then soften the onion for 5 mins. Increase the heat a little, stir in the ginger, garlic, shrimp paste, chilli and lemongrass, and cook for 2 mins. Add the curry powder and sugar, and keep stirring. When the sugar starts to melt and everything starts to clump together, add the coriander stems, coconut milk and 2 tbsp water, then bring to a simmer.", "Add the fish to the sauce, tuck the prawns in here and there, then squeeze over half the lime. Pop on the lid and simmer for 5 mins more or until the hake is just cooked and flaking, and the prawns are pink through. Taste for seasoning, adding a squeeze more lime to the sauce if you like. Scatter over the coriander leaves and serve with rice."],
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
            name: "salad",
            description: "Perfect for BBQs and buffets, our epic salad is an assembly job of gorgeous ingredients – no cooking required. Serve it with lamb kebabs for an impressive summer feast",
            category: "side",
            ingredients:
                [{ ItemIngredient: "black beans", ItemQuantity: "400g drained" },
                { ItemIngredient: "large handfuls baby spinach leaves roughly chopped", ItemQuantity: "2 " },
                { ItemIngredient: "chopped into large chunks heritage tomatoes", ItemQuantity: "500g" },
                { ItemIngredient: "halved lengthways, seeds scooped out and sliced on an angle cucumber", ItemQuantity: "½ " },
                { ItemIngredient: "peeled and chopped into chunks mango", ItemQuantity: "1" },
                { ItemIngredient: " large red onion halved and finely sliced", ItemQuantity: "1" },
                { ItemIngredient: " radishes sliced", ItemQuantity: "6-8" },
                { ItemIngredient: " avocados peeled and sliced", ItemQuantity: "2" },
                { ItemIngredient: "feta crumbled", ItemQuantity: "100g " },
                { ItemIngredient: "herbs reserved from the dressing", ItemQuantity: "handful" },
                { ItemIngredient: "mint", ItemQuantity: "large bunch " },
                { ItemIngredient: " coriander", ItemQuantity: "small bunch" },
                { ItemIngredient: " basil", ItemQuantity: "small bunch" },
                { ItemIngredient: " green chilli, deseeded and chopped", ItemQuantity: "1 fat" },
                { ItemIngredient: "garlic clove", ItemQuantity: "1 small " },
                { ItemIngredient: " extra virgin olive oil or rapeseed oil", ItemQuantity: "1 tbsp" },
                { ItemIngredient: ", zested and juiced", ItemQuantity: "2 limes" },
                { ItemIngredient: " white wine vinegar", ItemQuantity: "2 tbsp" },
                { ItemIngredient: "honey", ItemQuantity: "2 tsp " },]   
          ,
            AllergyTrigger: [""],
            FullMethod: ["Make the dressing by blending all of the ingredients in a food processor (or very finely chop them), saving a few herb leaves for the salad. You can make the dressing up to 24 hrs before serving.", "Scatter the beans and spinach over a large platter. Arrange the tomatoes, cucumber, mango, onion and radishes on top and gently toss together with your hands. Top the salad with the avocados, feta and herbs, and serve the dressing on the side."],
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
            description: "Indulge yourself with this ultimate chocolate cake recipe that is beautifully moist, rich and fudgy. Perfect for a celebration or an afternoon tea",
            category: "dessert",
            ingredients:
                [{ ItemIngredient: "dark chocolate (about 60% cocoa solids), chopped", ItemQuantity: "200g", },
                { ItemIngredient: "butter, cubed", ItemQuantity: "200g ", },
                { ItemIngredient: "instant coffee granules", ItemQuantity: "1 tbsp", },
                { ItemIngredient: "self-raising flour", ItemQuantity: "85g ", },
                { ItemIngredient: "plain flour", ItemQuantity: "85g ", },
                { ItemIngredient: "bicarbonate of soda", ItemQuantity: "¼ tsp ", },
                { ItemIngredient: "light muscovado sugar", ItemQuantity: "200g ", },
                { ItemIngredient: "golden caster sugar", ItemQuantity: "200g ", },
                { ItemIngredient: "cocoa powder", ItemQuantity: "25g", },
                { ItemIngredient: "medium eggs", ItemQuantity: "3", },
                { ItemIngredient: "buttermilk", ItemQuantity: "75ml", },
                { ItemIngredient: "grated chocolate or 100g curls", ItemQuantity: "50g", },
                { ItemIngredient: "dark chocolate (about 60% cocoa solids), chopped", ItemQuantity: "200g" },
                { ItemIngredient: "double cream", ItemQuantity: "300ml" },
                { ItemIngredient: "golden caster sugar", ItemQuantity: "2 tbsp" },
                ],

            AllergyTrigger: ["Wheat", "Eggs", "Lactose"],
            FullMethod: ["Heat the oven to 160C/fan 140C/gas 3. Butter and line a 20cm round cake tin (7.5cm deep).", "Put 200g chopped dark chocolate in a medium pan with 200g butter.", "Mix 1 tbsp instant coffee granules into 125ml cold water and pour into the pan.", "Warm through over a low heat just until everything is melted – don’t overheat. Or melt in the microwave for about 5 minutes, stirring halfway through.", "Mix 85g self-raising flour, 85g plain flour, ¼ tsp bicarbonate of soda, 200g light muscovado sugar, 200g golden caster sugar and 25g cocoa powder, and squash out any lumps.", "Beat 3 medium eggs with 75ml buttermilk.", "Pour the melted chocolate mixture and the egg mixture into the flour mixture and stir everything to a smooth, quite runny consistency.", "Pour this into the tin and bake for 1hr 25 – 1hr 30 mins. If you push a skewer into the centre it should come out clean and the top should feel firm (don’t worry if it cracks a bit).", "Leave to cool in the tin (don’t worry if it dips slightly), then turn out onto a wire rack to cool completely. Cut the cold cake horizontally into three.", "To make the ganache, put 200g chopped dark chocolate in a bowl. Pour 300ml double cream into a pan, add 2 tbsp golden caster sugar and heat until it is about to boil.", "Take off the heat and pour it over the chocolate. Stir until the chocolate has melted and the mixture is smooth. Cool until it is a little thicker but still pourable.", "Sandwich the layers together with just a little of the ganache. Pour the rest over the cake letting it fall down the sides and smooth over any gaps with a palette knife.", "Decorate with 50g grated chocolate or 100g chocolate curls. The cake keeps moist and gooey for 3-4 days."],
            Saveditem: [],
            shopping: [],
            preview: [{
                name: "Marla",
                rating: "5",
                comment: "Too cloying for my tastes.",
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

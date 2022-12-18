# SpoonsV2
Matthew Selkirk's Coursework for FEWD
please 🐻 bear with, the initial load ⏰ time for the application may be lengthy due to the nature of single page applications loading everything at once. a hosted version of the application can be found at [Matthews Heroku app](https://spoonsv3.herokuapp.com/)

## 🧬 Purpose of the application
The purpose of the application was to create a responsive, single-page cookery application. Which is
expected to use JavaScript and React to create the interface.
The basic requirements for the application were that it should allow users to

- [x] search for recipes
- [x] filter them based on the ingredients they have available
- [x] view nutritional information
- [x] rate recipes
- [x] create menus and shopping lists

All of these criteria have been met by the project and an additional step of adding a backend was undertaken to match the design specification created for part A of the coursework

## 🚀 Running the application
The application will be deployed on the heroku app at [Matthews Heroku app](https://spoonsv3.herokuapp.com/) if you wish to run the program locally there are a few steps.

### `Viewing the deployed application`
* The deployed application has the ability to search through a list of recipes stored in the database, to search enter any letter to the search bar and click on the name of the item when it appears below in the search results, clicking it will expand the accordian and offer the user the ability to view the whole recipe item.

* The search can be further augmented through the use of allergy filters which eliminate items from the list if the allergy is found in the associated area of the database, this works in conjunction with the other functionality of the searching.

* The secondary searchbar is an ingredients filter that will allow users to search for an ingredient that they have available, it will only display the results that include the ingredient searched for but works alongside the other filter methods.

* When expanded the recipe items offer the ability to view nutritional information first in a list then followed in graphical format to enable a diverse choice of views to better understand the data.

* Their is also a review section to each recipe item that allows users to enter Their name, a number 1-10 and a comment to rate their experience with each dish. once written it will be added to the current reviews below.

* Each item can be added to my recipes via button press, where they will be stored for ease of access to your favourite dishes, they can be removed on the associated navigation page.

* Similarly to my recipes, the shopping list stores chosen dishes but takes in the ingredients required to prepare them so that the user can view their shopping list in one place on the associated navigation page, where if needed they can be removed.

### `Local installation` 
- When the application zip file has been downloaded, extract it and open with visual code studio.

- Navigate to the backend directory and run `NPM I` to install the packages.

- in a second terminal navigate to the Client folder and do NPM I to install the packages.

- Once the packages have been installed do `node index` in the backend folder terminal to initialise the database and visit 
[http://localhost:3001/recipe](http://localhost:3000/recipe)
- to view if the database has been filled.

- if the database for any reason is empty navigate to 
[http://localhost:3001/recipe/new](http://localhost:3000/recipe/new)
- in your browser and the initialisation of the `recipe.db` will fill the database (this is not recommended if the database already has information in it as it will duplicate the information)

- After the backend is running make sure to use npm start in the client folder terminal to initialise the front end of the application and wait, it will automatically open the browser for you and if not open 
[http://localhost:3000](http://localhost:3000)
- to view it in your browser.

## Justification of changes

Due to the lack of familiarity with backend software it was decided that a simplified approach to the database using a single table with dictionairies containing extended information. This information would have been placed in its own table and linked into their current position, however as it is not a primary concern of the coursework task it has been downgraded in priority to achieve.

As it was outside the necessary scope some of the design documents features were discarded, like the login system and by extension the linked pages like my reviews.

Lastly I would like to say thank you for taking the time to read this 🥂
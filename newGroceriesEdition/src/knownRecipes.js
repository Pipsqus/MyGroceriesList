function generateRecipe(nameOfRecipe, ingredientsArray) {
	window[nameOfRecipe] = new Recipe(nameOfRecipe, ingredientsArray);
};
function generateCategory(nameOfCategory) {
	window[nameOfCategory] = new Category(Pasta, cate);
}

generateRecipe("Ragù", ["macinata", "pane", "parmigiano"]);
generateRecipe("Aglione", ["aglio", "peperoncino", "parmigiano"]);
generateRecipe("Cannelloni", ["ricotta", "spinaci", "parmigiano"]);
generateCategory("", [])


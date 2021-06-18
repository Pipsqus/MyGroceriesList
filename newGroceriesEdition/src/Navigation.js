function toggleRecipesAndIngredients() {
	let listOfSelectedRecipes = document.getElementById("listOfSelectedRecipes");
	let listOfIngredients = document.getElementById("listOfIngredients");

	listOfSelectedRecipes.classList.toggle("hidden");
	listOfIngredients.classList.toggle("hidden");
	updateLists(shoppingCart);
}

function updateLists(shoppingCart) {
	let listOfSelectedRecipes = document.getElementById("listOfSelectedRecipes");
	listOfSelectedRecipes.innerHTML = "Ricette";
	for (let key of Object.keys(shoppingCart.recipes)) {
		let recipeItem = 
			`<div><input type="radio" onclick="() => {
				shoppingCart.recipes['${key}'] = 1;
				}">${key}</div>`
		listOfSelectedRecipes.insertAdjacentHTML('beforeend', recipeItem);
	}

	let listOfIngredients = document.getElementById("listOfIngredients");
	listOfIngredients.innerHTML = "Ingredienti";
	for (const [key, value] of Object.entries(shoppingCart.ingredients)) {
		let ingredientItem = `<div><input type="radio">${key}: ${value}</div>`
		listOfIngredients.insertAdjacentHTML('beforeend', ingredientItem);
	}
}

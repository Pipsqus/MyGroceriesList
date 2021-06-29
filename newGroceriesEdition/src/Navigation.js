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
		if (shoppingCart.recipes[key] === "completed") {
			let recipeItem = 
				`<div><input id="${key}Listed" type="radio" onclick=recipeWasExecuted('${key}') checked><label for="${key}Listed">${key}</label></input></div>`;
			listOfSelectedRecipes.insertAdjacentHTML('beforeend', recipeItem);
		} else {
			let recipeItem = 
				`<div><input id="${key}Listed" type="radio" onclick=recipeWasExecuted('${key}')><label for="${key}Listed">${key}</label></input></div>`;
			listOfSelectedRecipes.insertAdjacentHTML('beforeend', recipeItem);
		}
	}

	let listOfIngredients = document.getElementById("listOfIngredients");
	listOfIngredients.innerHTML = "Ingredienti";
	for (const [key, value] of Object.entries(shoppingCart.ingredients)) {
		if (shoppingCart.ingredients[key] === "acquired") {
			let ingredientItem = `<div><input id="${key}Ingredient" type="radio" onclick=ingredientWasAcquired('${key}') checked><label for="${key}Ingredient">${key}</label></input></div>`
			listOfIngredients.insertAdjacentHTML('beforeend', ingredientItem);
		} else {
			let ingredientItem = `<div><input id="${key}Ingredient" type="radio" onclick=ingredientWasAcquired('${key}')><label for="${key}Ingredient">${key}</label></input></div>`
			listOfIngredients.insertAdjacentHTML('beforeend', ingredientItem);
		}
	}
}

function recipeWasExecuted(recipe) {
	shoppingCart.recipes[recipe] = "completed";
	localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}
function ingredientWasAcquired(ingredient) {
	shoppingCart.ingredients[ingredient] = "acquired";
	localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}
function resetLists() {
	localStorage.clear();
	document.getElementById("listOfSelectedRecipes").innerHTML = "Recipes";
	document.getElementById("listOfIngredients").innerHTML = "Ingredienti";
	shoppingCart = {recipes: {}, ingredients: {}};
	window.location.reload();
}

function nextCategory() {
	const currentScreenPosition = window.pageYOffset;
	for (let category of document.getElementsByClassName("Category")) {
		if (category.offsetTop > currentScreenPosition + 20) {
			category.scrollIntoView();
			break;
		}	
	}
}

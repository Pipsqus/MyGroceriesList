function addTemporaryRecipe(name) {
	let inputText = document.getElementById("temporaryRecipeInput");
	if (inputText.value != "") {
		const addedRecipe = new Recipe(name, ["dididi", "oppio"], undefined);
		addedRecipe.addToShoppingCart();
	}

	inputText.value = "";
}

function addTemporaryIngredient(name) {
	let inputText = document.getElementById("temporaryIngredientInput");
	if (inputText.value != "") {
		const addedIngredient = new Recipe("", [inputText.value, ""], undefined);
		addedIngredient.addToShoppingCart();
	}

	inputText.value = "";
}

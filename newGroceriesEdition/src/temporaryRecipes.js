function addTemporaryRecipe(name) {
	let inputText = document.getElementById("temporaryRecipeInput");
	if (inputText.value != "") {
		const addedRecipe = new Recipe(name, ["dididi", "oppio"], undefined);
		addedRecipe.addToShoppingCart();
	}

	inputText.value = "";
}

function addTemporaryIngredient() {
	
}

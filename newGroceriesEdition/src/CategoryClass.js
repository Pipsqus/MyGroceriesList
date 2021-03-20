class Category {
	constructor(name, recipeArray) {
		this.name = name;
		this.recipeArray = recipeArray;

		this._generateHTMLOfCategories();
	}

	_generateHTMLOfCategories() {
		var categorySection = document.getElementsById("CategoryContainer");
		var categoryElement = `<div class="Category">${this.name}</div>`

		categorySection.insertAdjacentHTML('beforeend', categoryElement);
	}


}

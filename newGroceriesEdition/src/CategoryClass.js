class Category {
	constructor(name, recipeArray) {
		this.name = name;
		this.recipeArray = recipeArray;

		this._generateHTMLOfCategories();
	}

	_generateHTMLOfCategories() {
		var categorySection = document.getElementById("CategoryContainer");
		var categoryElement = `<div class="Category" 
		id="${this.name}">${this.name}</div>`

		categorySection.insertAdjacentHTML('beforeend', categoryElement);
	}


}

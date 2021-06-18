function generateCategory(nameOfCategory, recipesInCategory) {
	window[nameOfCategory] = new Category(nameOfCategory, recipesInCategory);
}

class Category {
	constructor(nameString, recipesObject) {
		this.name = nameString;
		this.recipes = recipesObject;

		this._generateHTMLOfCategories();
		this._addRecipes();
	}

	_generateHTMLOfCategories() {
		let categorySection = document.getElementById("CategoryContainer");
		let categoryElement = `<div class="Category">${this.name}</div>
			<div id="${this.name}"></div>`

		categorySection.insertAdjacentHTML('beforeend', categoryElement);
	}
	
	_addRecipes() {
		for (let j = 0; j < Object.keys(this.recipes).length; j++) {
			let currentString = Object.keys(this.recipes)[j];
			this[currentString] = new Recipe(Object.keys(this.recipes)[j],
					Object.values(this.recipes)[j], this.name);
		}
	}
}

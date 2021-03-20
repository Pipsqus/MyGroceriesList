class Recipe {
	constructor(name, ingredientsArray, category) {
		this.name = name;
		this.ingredientsArray = ingredientsArray;

		this._generateHTMLOfAlternatives();
	};

	_generateHTMLOfAlternatives() {
		var recipeParagraph = document.getElementById("myRecipesCollection");
		var listElement =
		`<input type="radio" id="${this.name}"
		onclick="${this.name}.addToShoppingCart(); this.onclick=null"
		><label for="${this.name}">${this.name}</label></input><br>`;

		recipeParagraph.insertAdjacentHTML('beforeend', listElement);
	}

	addToShoppingCart() {
		shoppingCart.recipes[this.name] = 1;
		for (var i = 0; i < this.ingredientsArray.length; i++) {
			shoppingCart.ingredients[this.ingredientsArray[i]] ?
				shoppingCart.ingredients[this.ingredientsArray[i]] += 1 :
				shoppingCart.ingredients[this.ingredientsArray[i]] = 1 ;
		}
	}
}

const shoppingCart = {
	recipes : {},
	ingredients: {},
};


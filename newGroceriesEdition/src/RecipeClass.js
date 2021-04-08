class Recipe {
	constructor(name, ingredientsArray, appropriateCategory) {
		this.name = name;
		this.ingredientsArray = ingredientsArray;
		this.category = appropriateCategory;

		this._generateHTMLOfKnownRecipes();
	};

	_generateHTMLOfKnownRecipes() {
		var recipeParagraph = document.getElementById(this.category);
		var listElement =
		`<input type="radio" id="${this.name}"
		onclick="${this.category}.${this.name}.addToShoppingCart(); this.onclick=null"
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
		localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
	}
}

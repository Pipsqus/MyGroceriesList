class Recipe {
	constructor(name, ingredientsArray, appropriateCategory) {
		this.name = name;
		this.ingredientsArray = ingredientsArray;
		this.category = appropriateCategory;

		if (this.category != undefined) {
			this._generateHTMLOfKnownRecipes();
		}
	};

	_generateHTMLOfKnownRecipes() {
		let recipeParagraph = document.getElementById(this.category);
		let listElement =
		`<input type="radio" id="${this.name}"
		onclick="${this.category}['${this.name}'].addToShoppingCart(); this.onclick=null"
		><label for="${this.name}">${this.name} </label
			><a href=${this.ingredientsArray[this.ingredientsArray.length - 1]}> &#10170</a></input><br>`;

		recipeParagraph.insertAdjacentHTML('beforeend', listElement);
	}

	addToShoppingCart() {
		shoppingCart.recipes[this.name] = 0;
		for (let i = 0; i < this.ingredientsArray.length - 1; i++) {
			shoppingCart.ingredients[this.ingredientsArray[i]] ?
				shoppingCart.ingredients[this.ingredientsArray[i]] += 1 :
				shoppingCart.ingredients[this.ingredientsArray[i]] = 1 ;
		}

		localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

		updateLists(shoppingCart);
	}
}


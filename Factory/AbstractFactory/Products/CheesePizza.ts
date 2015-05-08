class CheesePizza extends Pizza {
    private ingredientFactory: IPizzaIngredientFactory;

    constructor(ingredientFactory: IPizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log(this.name + 'を下処理');
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

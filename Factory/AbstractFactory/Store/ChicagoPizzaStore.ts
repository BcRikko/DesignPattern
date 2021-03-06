class ChicagoPizzaStore extends PizzaStore{
    protected createPizza(item:string):Pizza{
    var pizza: Pizza = null;
    var ingredientFactory = new NYIngredientFactory();

    switch (item) {
        case 'チーズ':
            pizza = new CheesePizza(ingredientFactory);
            pizza.name = 'シカゴスタイルのチーズピザ';
            break;
        case '野菜':
            pizza = new VeggiePizza(ingredientFactory);
            pizza.name = 'シカゴスタイルの野菜ピザ';
            break;
        case 'クラム':
            pizza = new ClamPizza(ingredientFactory);
            pizza.name = 'シカゴスタイルのクラムピザ';
            break;
        case 'ペパロニ':
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.name = 'シカゴスタイルのペパロニピザ';
            break;
    }

    return pizza;
    }
}

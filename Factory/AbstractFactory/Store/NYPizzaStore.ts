class NYPizzaStore extends PizzaStore{
    protected createPizza(item:string):Pizza{
    var pizza: Pizza = null;
    var ingredientFactory = new NYIngredientFactory();

    switch (item) {
        case 'チーズ':
            pizza = new CheesePizza(ingredientFactory);
            pizza.name = 'ニューヨークスタイルのチーズピザ';
            break;
        case '野菜':
            pizza = new VeggiePizza(ingredientFactory);
            pizza.name = 'ニューヨークスタイルの野菜ピザ';
            break;
        case 'クラム':
            pizza = new ClamPizza(ingredientFactory);
            pizza.name = 'ニューヨークスタイルのクラムピザ';
            break;
        case 'ペパロニ':
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.name = 'ニューヨークスタイルのペパロニピザ';
            break;
    }

    return pizza;
    }
}

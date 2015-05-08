class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        switch (item) {
            case 'チーズ':
                return new NYStyleCheesePizza();
            case '野菜':
                return new NYStyleVeggiePizza();
            case 'クラム':
                return new NYStyleClamPizza();
            case 'ペパロニ':
                return new NYStylePepperoniPizza();
            default:
                return null;
        }
    }
}

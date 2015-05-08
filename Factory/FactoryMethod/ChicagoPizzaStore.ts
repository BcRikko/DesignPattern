class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        switch (item) {
            case 'チーズ':
                return new ChicagoStyleCheesePizza();
            case '野菜':
                return new ChicagoStyleVeggiePizza();
            case 'クラム':
                return new ChicagoStyleClamPizza();
            case 'ペパロニ':
                return new ChicagoStylePepperoniPizza();
            default:
                return null;
        }
    }
}

class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        var pizza: Pizza = null;

        switch (type) {
            case 'チーズ':
                pizza = new CheesePizza();
                break;
            case 'ペパロニ':
                pizza = new PepperoniPizza();
                break;
            case 'クラム':
                pizza = new ClamPizza();
                break;
            case '野菜':
                pizza = new VeggiePizza();
                break;
        }

        return pizza;
    }
}

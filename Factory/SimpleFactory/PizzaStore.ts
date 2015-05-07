class PizzaStore {
    factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    orderPizza(type: string): Pizza {
        var pizza = this.factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}

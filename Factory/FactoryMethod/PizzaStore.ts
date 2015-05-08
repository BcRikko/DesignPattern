// abstract class
class PizzaStore {
    // abstract method
    createPizza(item: string): Pizza {
        return null;
    }

    orderPizza(type: string): Pizza {
        var pizza = this.createPizza(type);
        console.log('--- ' + pizza.name + 'を作っています ---');
        pizza.prepare();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}

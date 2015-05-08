// abstract class
class PizzaStore{
    // abstract method
    protected createPizza(item:string):Pizza{
    return null;
};

orderPizza(type:string){
    var pizza = this.createPizza(type);

    console.log('--- ' + pizza.name + 'をつくっています ---');
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
    }
}

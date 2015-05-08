interface IPizzaIngredientFactory {
    createDough: () => IDough;
    createSauce: () => ISauce;
    createCheese: () => ICheese;
    createVeggies: () => IVeggies[];
    createPepperoni: () => IPepperoni;
    createClam: () => IClams;
}

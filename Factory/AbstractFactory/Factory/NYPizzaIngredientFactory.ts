class NYIngredientFactory implements IPizzaIngredientFactory {
    createDough(): IDough {
        return new ThinCrustDough();
    }

    createSauce(): ISauce {
        return new MarinaraSauce();
    }

    createCheese(): ICheese {
        return new ReggianoCheese();
    }

    createVeggies(): IVeggies[] {
        var veggies = [
            new Garlic(),
            new Onion(),
            new Mushroom(),
            new RedPepper()
        ];

        return veggies;
    }

    createPepperoni(): IPepperoni {
        return new SlicedPepperoni();
    }

    createClam(): IClams {
        return new FreshClam();
    }
}

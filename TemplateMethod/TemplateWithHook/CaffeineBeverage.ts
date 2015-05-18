class CaffeineBeverage {
    //  sealed method
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    // abstract method
    brew(): void { }
    addCondiments(): void { }

    boilWater(): void {
        console.log('お湯を沸かします');
    }

    pourInCup(): void {
        console.log('コップに注ぎます');
    }
}

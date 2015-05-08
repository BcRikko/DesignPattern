// abstract class
class Pizza {
    private _name: string;
    dough: IDough;
    sauce: ISauce;
    veggies: Array<IVeggies> = [];
    cheese: ICheese;
    pepperoni: IPepperoni;
    clam: IClams;

    // abstract method
    prepare(): void{};

    bake(): void {
        console.log('350度で25分間焼く');
    }

    cut(): void {
        console.log('ピザを扇形に切り分ける');
    }

    box(): void {
        console.log('PizzaStoreの正式な箱にピザを入れる');
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    toString(): string {
        var display = '';

        display += '---- ' + this._name + ' ----\n';

        if (!this.dough) {
            display += this.dough.toString() + '\n';
        }

        if (!this.sauce) {
            display += this.sauce.toString() + '\n';
        }

        if (!this.cheese) {
            display += this.cheese.toString() + '\n';
        }

        if (!this.veggies) {
            this.veggies.forEach((v, i) => {
                display += v;
                if (i < this.veggies.length - 1) {
                    display += ', ';
                }
            });
        }

        if (!this.clam) {
            display += this.clam.toString() + '\n';
        }

        if (!this.pepperoni) {
            display += this.pepperoni.toString() + '\n';
        }

        return display;
    }
}

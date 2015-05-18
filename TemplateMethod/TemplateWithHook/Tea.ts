class Tea extends CaffeineBeverage {
    // override
    brew(): void {
        console.log('紅茶を浸します');
    }

    // override
    addCondiments(): void {
        console.log('紅茶にレモンを入れます');
    }
}

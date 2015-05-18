class Coffee extends CaffeineBeverage {
    // override
    brew(): void {
        console.log('フィルタでコーヒーをドリップします');
    }

    // override
    addCondiments(): void {
        console.log('コーヒーに砂糖とミルクを入れます');
    }
}

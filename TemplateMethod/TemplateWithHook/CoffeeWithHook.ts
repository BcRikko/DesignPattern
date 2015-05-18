class CoffeeWithHook extends CaffeineBeverageWithHook {
    // override
    brew(): void {
        console.log('フィルタでコーヒーをドリップします');
    }

    // override
    addCondiments(): void {
        console.log('コーヒーに砂糖とミルクを入れます');
    }

    // override
    customerWantsCondiments(): boolean {
        var answer = this.getUserInput();

        // startsWith
        if ((' ' + answer).toLowerCase().indexOf(' y') != -1) {
            return true;
        } else {
            return false;
        }
    }

    getUserInput(): string {
        var answer = '';
        answer = window.prompt('コーヒーに砂糖とミルクを入れますか？（y/n）', 'n')

        if (answer === '') {
            answer = 'no'
        }

        return answer;
    }
}

class TeaWithHook extends CaffeineBeverageWithHook {
    // override
    brew(): void {
        console.log('紅茶を浸します');
    }

    // override
    addCondiments(): void {
        console.log('紅茶にレモンを入れます');
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
        answer = window.prompt('紅茶にレモンを入れますか？（y/n）', 'n')

        if (answer === '') {
            answer = 'no'
        }

        return answer;
    }
}

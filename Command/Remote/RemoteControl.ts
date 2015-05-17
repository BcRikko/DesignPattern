class RemoteControl {
    private onCommands: Array<ICommand>;
    private offCommands: Array<ICommand>;

    constructor() {
        this.onCommands = new Array<ICommand>(7);
        this.offCommands = new Array<ICommand>(7);

        // null object
        var noCommand = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
    }

    setCommant(slot: number, onCommand: ICommand, offCommand: ICommand): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
    }

    offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
    }

    toString(): string {
        var text = '\n------ Remote Control ------\n';
        
        for(let i = 0; i < 7;i++){
            // クラス名取得の方法は→ http://stackoverflow.com/questions/22777181/typescript-get-to-get-class-name-at-runtime
            text += '[slot' + i + '] ' + this.onCommands[i] + '  :  ' + this.offCommands[i] + '\n';
        }

        return text;
    }
}

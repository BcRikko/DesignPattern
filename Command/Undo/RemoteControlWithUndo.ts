class RemoteControlWithUndo {
    private onCommands: Array<ICommand>;
    private offCommands: Array<ICommand>;
    private undoCommand: ICommand;

    constructor() {
        this.onCommands = Array<ICommand>(7);
        this.offCommands = Array<ICommand>(7);

        var noCommand = new NoCommand();
        for(let i = 0; i < 7;i++){
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }

        this.undoCommand = noCommand;
    }

    setCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    undoButtonWasPushed(): void {
        this.undoCommand.undo();
    }
}

class MacroCommand implements ICommand {
    private commands: Array<ICommand>;

    constructor(commands: Array<ICommand>) {
        this.commands = commands;
    }

    execute(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }

    undo(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].undo();
        }
    }
}

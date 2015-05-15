class SimpleRemoteControl {
    private slot: ICommand;

    setCommand(command: ICommand): void {
        this.slot = command;
    }

    buttonWasPressed(): void {
        this.slot.execute();
    }
}

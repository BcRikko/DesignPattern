class GarageDoorDownCommand implements ICommand {
    private garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.down();
    }
}

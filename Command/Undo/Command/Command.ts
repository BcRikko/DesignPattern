interface ICommand {
    execute: () => void;
    undo: () => void;
}

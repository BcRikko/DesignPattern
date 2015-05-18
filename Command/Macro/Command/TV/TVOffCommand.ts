class TVOffCommand implements ICommand {
    private tv:TV;
    
    constructor(tv:TV){
        this.tv =tv;
    }
    
    execute():void{
        this.tv.off();
    }
    
    undo():void{
        this.tv.on();
    }
}

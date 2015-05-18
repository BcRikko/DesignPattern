class TVOnCommand implements ICommand {
    private tv:TV;
    
    constructor(tv:TV){
        this.tv =tv;
    }
    
    execute():void{
        this.tv.on();
        this.tv.setInputChannel();
    }
    
    undo():void{
        this.tv.off();
    }
}

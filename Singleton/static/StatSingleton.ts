class SingletonClass {
    private static uniqueInstance: SingletonClass = new SingletonClass();

    // 'private' modifier cannot appear on a constructor declaration.
    // private constructor() { }

    // http://www.codebelt.com/typescript/typescript-singleton-pattern
    constructor() {
        if (SingletonClass.uniqueInstance) {
            throw new Error('getInstanceを使ってください');
        }
        SingletonClass.uniqueInstance = this;
    }


    public static getInstance(): SingletonClass {
        return this.uniqueInstance;
    }

    public getDescription(): string {
        return '静的（先行）初期化のSingletonパターン';
    }
}

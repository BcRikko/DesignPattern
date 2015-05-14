// privateなコンストラクタが定義できないので、TypeScriptではこの典型的なパターンは使えない
class SingletonClass {
    private static uniqueInstance: SingletonClass = null;

    // 'private' modifier cannot appear on a constructor declaration.
    // private constructor() { }

    static getInstance(): SingletonClass {
        if (this.uniqueInstance === null) {
            this.uniqueInstance = new SingletonClass();
        }
        return this.uniqueInstance;
    }

    getDescription(): string {
        return '典型的なSingletonパターン';
    }
}

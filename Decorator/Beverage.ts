enum Size { TALL, GRANDE, VENTI }

// abstract class
class Beverage {
    // protected
    _description = '不明な飲み物';
    private _size = Size.TALL;

    get description(): string {
        return this._description;
    }

    get size(): Size {
        return this._size;
    }

    set size(size: Size) {
        this._size = size;
    }

    // abstract method
    cost(): number {
        return 0;
    }


}

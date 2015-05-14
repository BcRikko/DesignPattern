var boiler = ChocolateBoiler.getInstance();
boiler.fill();
boiler.boil();
boiler.drain();

// すでに存在するインスタンスが返ってくる
var boiler2 = ChocolateBoiler.getInstance();

console.log(boiler);
console.log(boiler2);

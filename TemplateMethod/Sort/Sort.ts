var ducks =
    [
        new Duck('ダフィー', 8),
        new Duck('デューイ', 2),
        new Duck('ハワード', 7),
        new Duck('ルーイ', 2),
        new Duck('ドナルド', 10),
        new Duck('ヒューイ', 2)
    ]

console.log('ソート前');
display(ducks);

// ducks.sort(compareFunction);
ducks.sort((a, b) => {
    return a.weight - b.weight;
});

console.log('ソート後');
display(ducks);


function display(ducks: Array<Duck>): void {
    ducks.forEach(d => console.log(d.toString()));
}

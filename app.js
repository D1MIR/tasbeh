function lorem(a, b) {
    console.log( "========================" );
    console.log( `${a} - ${b} = ${a - b}` );
    console.log( `${a} + ${b} = ${a + b}` );
}
lorem(5, 6)
lorem(55, 25)
lorem(100, 80)

let n = 8
n = n + 5 // 13
n = n - 3 // 10
n = n * 2 // 20
n = n / 5 // 4
console.log(n);

function call() {
    console.log("USD");
}

let count = 0
function counter() {
    count = count + 100 + 12
    number.innerHTML = count + " USD"
}

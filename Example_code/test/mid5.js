let array = [];
for (let i = 0; i < 100; i++) {
    array[i] = Math.floor(Math.random() * 100 + 1);
    console.log(array[i]);
}

let temp = array.filter((e) => e % 2 == 0);
let sum = temp.reduce(callback);

function callback(a, b) {
    console.log(a + "," + b);
    return a + b;
}
console.log(sum);

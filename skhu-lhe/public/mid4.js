let array =[];

for(let i=0; i<100; i++){
    array[i] = Math.floor(Math.random()*100+1);
}

let temp = array.filter((e) => e % 2 == 0);
let len = temp;

let total = temp.reduce((acc, cur) => acc+cur,0);
console.log(total);


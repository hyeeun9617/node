let array = [];

for(let i=0;i<100; i++){
    array[i] = Math.floor(Math.random()*100+1);

}

for(let i=0; i<100; i++){
    array.sort(compare);

}

function compare (a,b){
    return a-b;
}

console.log(array);
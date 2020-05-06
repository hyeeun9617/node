let array = [];

for(let i=0;i<100;i++){
    array[i] = Math.floor(Math.random()*100+1);
    
}
array.sort(compare);
function compare(a,b){
    return b-a;
}

console.log(array);
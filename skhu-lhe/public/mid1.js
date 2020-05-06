let array=[];

for (let i=0;i<100;i++){
    array[i] = Math.floor(Math.random()*100+1);

}

for(let i=0; i<array.length; i++){
   
    if(array[i] % 10 >=5 && array[i] % 10<=9){
      
        array.splice(i,1);
        i--;
    }

}
console.log(array);
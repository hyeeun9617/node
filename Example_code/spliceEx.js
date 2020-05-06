let a = [2,4,5];

for(let i=0; i<a.length; i++){
    if(a[i] % 2===0){
        a.splice(i,1);
        i--;
    }
    console.log(i+" 의 위치 값은" +a[i]+" " + a.length);
}

console.log(a);
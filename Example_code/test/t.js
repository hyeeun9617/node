let array =[];
let sum =0;

for(let i=0;i<100;i++){
   array[i] = Math.floor(Math.random()*100+1);
   sum+=array[i];
}

let avg = sum/100;
console.log("평균값은 "+avg);

console.log("평균값 수정 "+avg.toFixed(1));
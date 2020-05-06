/* 빈 배열
MAth.randon() 메소드를 사용해서 1이상 100이하의 정수난수를 100개 생성하여 배열에 값 대입
짝수(2의 배수)를 찾아서 모두 제거한다.
*/

let a=[];
for(let i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}

for(let i=0; i<100; i++){

    if(a[i] %2 == 0){
        a.splice(i,1);
        i=i-1;
    }
}
console.log(a);
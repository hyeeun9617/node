/* 빈 배열을 만든다.
MAth.random() 메소드를 사용해서 1이상 100이하의 정수 난수를 100개 생성해서 배열에 값을 대입한다.
배열은 오름차순으로 정렬한다.
배열을 출력한다.
*/

let a=[];
for(let i=0; i<100;i++){
    a[i] = Math.floor(Math.random()*100+1);

}
a.sort(compareNumber);
console.log(a);

function compareNumber(i,j){
    return i-j;
}
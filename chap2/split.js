//문자열에서 공백을 기분으로 문자열을 쪼개서, 
// 문자열 배열을 만들고 그 배열을 출력하기

let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let a=s.split(" ");

for(let i=0; i<a.length; i++){
    console.log(a[i]);

}
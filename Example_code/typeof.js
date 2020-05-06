function add(a,b){
    
    if(b == undefined)
         console.log("yes")
    
    return a+b;
}
console.log(add(3));

//변수 aa에 대해
let aa;
if(aa=='undefined'){
    console.log("aa는 undefined 1");
}
if(aa==undefined){
    console.log("aa는 undefined 2");
}
if(typeof aa=='undefined'){
    console.log("aa의 타입은 undefined 3");
}
if(typeof aa==undefined){
    console.log("4");
}

// 변수 c가 "undefined"인지 확인한 것
let c = NaN;
if(typeof c=='number'){
    console.log("true");
}
console.log(typeof c);

var msg3 = null;
if (msg3 == null) {

    console.log("msg3은 null 상태임");
}


console.log(typeof(null)); 

if (typeof x == undefined) { // 에러 없이 true 로 평가 // 이 문이 실행됨
    console.log("true")
}

let v;
console.log(typeof v);

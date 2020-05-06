
function test(f){
    let result = f(4,5);
    console.log(result);
}

//let add = (a,b) => a+b;
//test(add);
 
test((a,b)=>a+b);

function print(m){
    console.log(m, new Date());
}

setTimeout(print,1000, "5초");
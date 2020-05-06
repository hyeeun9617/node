let a =[0,1,2];
a.splice(1,0,"a","b");
console.log(a);

function test1(f){
    let result = f(3,4);
    console.log(result);

}

test1(function(a,b){
    return a+b;
});

test1(function(a,b){
    return a*b;
})


function printTime(msg){
    console.log(msg, new Date());

}
//setInterval(printTime, 1000,"1초후");

setInterval ((function (msg) {console.log(msg, new Date());} ,1000,"2초후");

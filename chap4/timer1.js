var count = 0;
var id = setInterval(print,1000);

function print() {
    
    count++;
    console.log(new Date());

    if(count == 10){
        clearInterval(id);
    }

}



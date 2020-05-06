function sum(msg, ...a){
  console.log(msg);
    let result =0;

    for(let i=0; i<a.length; i++)
       result +=a[i];
    
        return result;
}

    console.log(sum("hello", 1,2,3,4));



    function print(msg){
      console.log (msg,new Date());

      if(c==10){
        clearTimeout(id);
        
      }
      c++;
    }

    let c=0;
    let id = setInterval(print, 1000,"1초후");




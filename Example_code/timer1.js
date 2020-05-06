function factory(){
    return function(msg){
        console.log(msg);
    }
}

factory()("hh");


function createPerson(name, age){
    return {name, age};

}
console.log(createPerson("홍길동", 26));


console.log("-------------------------------");

let persons=[
    {name: "홍길동" , age :16},
    {name : "임꺽정", age :14},
    {name : "이혜은", age :15} 
]
console.log(persons);
for(let i=0;i<persons.length; i++){
    console.log(persons[i]);
}

console.log("-------------------------------");

let p ={ㅁㅎ:"이", age :12, 0:"호형"};
console.log(p);

let s= "one, two,three four";
let a=s.split(/[\t ,]+/);

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
console.log(a.length);

console.log("-----------")

let b = s;
for(let i=0; i<a.length; i++){
    console.log(b[i]);
}
var student = [
    { name: "Andrew", age: 21 },
    { name: "Leo", age: 25 },
    { name: "Gabriel", age: 19 },
    { name: "Amy", age: 20 },
    { name: "David", age: 26 },
    { name: "Bryan", age: 19 }
]

student.sort(compare);

function compare(a, b) {    //첫번째 방법
    if (a.name > b.name)
        return 1;
    else if (a.name < b.name)
        return -1;
    else
        return 0;
}

student.sort(function (a, b) {  // 두번째 방법 : 배열 a의 name속성을 오름차순 정렬
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
}
);

console.log(student);

let user =
{
    name:"Alice",
    married:false,
    age:34
}
console.log(user);
let userJson =JSON.stringify(user);
console.log(userJson);
user=JSON.parse(userJson);
console.log(user);


let userComplex =
{
    name:"Alice",
    married:false,
    age:34,
    company:{
        name:"Opera",
        country:"Sweden"
    },
    favColor:['blue','pink','white']
}
console.log(userComplex );

let userComplexJson =JSON.stringify(userComplex)
console.log(userComplexJson); 

let array =[
    {
        name:"Ivan",
        married:true,
        age:30
    },
    {
        name:"Alice",
        married:false,
        age:34  
    }
];

let arrayJson =`[
    {
        "name":"Ivan",
        "married":true,
        "age":30
    },
    {
        "name":"Alice",
    "married":false,
    "age":34
    }
]`;

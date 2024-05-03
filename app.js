const users=[
    {
        name:"Kishan Singh",
        age:"25"
    },
    {
        name:"Shikha Singh",
        age:"23"
    },
    {
        name:"Akshay",
        age:"29",
    },
    {
        name:"Juhi",
        age:"30",
    },
];

function sortbyAge(){
    const data=users.sort((a,b)=>a.age-b.age);
    return(data);
}
console.log(sortbyAge());

module.exports=sortbyAge;
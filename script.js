alert("Welcome to my website");
const name="Battula Chennakeshava Reddy";
let age=22;
const goal="To become financially independent and successful in my career by age of 40.";
let s=true;

console.log(s);
console.log("Name: ",name);
console.log("Age: ",age);
console.log("Goal:",goal);

function calculateAge(age){
    return age+1;
}
console.log(calculateAge(age));

age=age+1;
console.log("Next Year Age: ",age);

function greet(name){
    console.log("Hello, " + name + "!");
}
greet(name);


function checkaccess(age){
    if(age<13){
        console.log("Your are a chile");
    }
    else if(age<22){
        console.log("Your are a teenager");
    }
    else{
        console.log("Your are a adult");
    }
}

myage=26;
checkaccess(myage);
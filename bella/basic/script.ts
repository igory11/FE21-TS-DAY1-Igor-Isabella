/* let numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10];

function calc(index: number){
for (let a=1; a<= 10; a++){
    document.getElementById("box").innerHTML += (numbers[index] + "x" + a +"="+ (a*numbers[index])+ "<br>");
} 
}
// document.getElementById etc is working even if it's underlined!

for (let i=0; i< numbers.length; i++) {
    calc(i);
} */



/* 
let myName: {
    fName: string,
    lName: string
}= [{
    fName: "Isabella",
    lName: "Hartwig"
},
{
    fName: "Igor",
    lName: "Testname"
},]; */


/* const myName = {
    fName: "Isabella",
    lName: "Hartwig"
}; */

/* let myName: Array <string>= ["Isabella", "Hartwig"]; */

/* console.log(myName.fName + " " +myName.lName); */
/* console.log(myName.fName); 
console.log(myName.lName);*/
/* (document.getElementById('box').innerHTML = myName.fName + " " +myName.lName; */

let myName: { fName: string, lName: string }[] = 
[
    { "fName": 'Igor', "lName": "Yumashev" },
    
];


/* for (let i: number = 0; i<10; i++) {
    myName.forEach(function(value){
    
       
        document.getElementById("box").innerHTML += value.fName +"<br>"
    
    });
} */

for (let i: number = 0; i<10; i++) {
   
    setTimeout(function(){
        myName.forEach(function(value){
    
       
            (document.getElementById("box") as HTMLElement).innerHTML += value.lName +"<br>"
        
        })}, 3000);
}


//basic ex3

let players: Array<string> = ["Igor", "Isabella", "Fiona", "Fred", "Gustav"];

for (let i in players){
    console.log(i);
}

for (let val of players){
    console.log(val);
}

players.forEach(function(val,i){
    console.log(val, i);
})

// array and object fun

const hero = {
    fName: "Clark",
    lName: "Kent",
    age: 30
};

const a = hero.fName;
const b = hero.lName;
const {fName: a, lName: b}= hero;
const {fName: fName, lName:lName}= hero;
//??

const DCuni = ["Superman", "Batman"];
const [x,y]=DCuni;



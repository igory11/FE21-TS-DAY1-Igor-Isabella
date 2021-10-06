// let obj: {
//     fName: string;
//     lName: string;
// } = {

//     fName: 'Igor',
//     lName: 'Yumadhev'

// }

const obj = {
fName: 'Igor',
lName: 'Yumashev'
}


console.log(obj.fName + ' ' + obj.lName)
document.write(obj.fName + ' ' + obj.lName+'<br><br><br>')


let arr: { fName: string, lName: string }[] = [obj]

console.log(arr)

// [
//     { "fName": 'Igor', "lName": "Yumashev" }
    
// ];

// for (let i = 0; i<10; i++) {

//     arr.forEach(function(v) {
//         document.write(v.fName + '<br>')
//     })

// }

// setTimeout(function() {
//     for (let i = 0; i<10; i++) {

//         arr.forEach(function(v) {
//             document.write(v.lName + '<br>')
//         })
    
//     }
// }, 3000)


// Basic 3

let players: string[] = ["Igor", "Isabella", "Henry", "Sebastian", "David" ];

for (let x in players) {
    console.log(x)
}

for (let x of players) {
    console.log(x)
}

players.forEach(function(val, i) {
console.log(val,i)
})
"use strict";
let text = "Hello World";
const txt = "Hi There!";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function calc(index) {
    for (let a = 1; a <= 10; a++) {
        console.table(a + 'X' + numbers[index] + '=' + a * numbers[index]);
        // document.getElementById('box').innerHTML += a + 'X' + numbers[index] + '=' + a*numbers[index] + '<br>';
    }
}
for (let i = 0; i < numbers.length; i++) {
    calc(i);
}

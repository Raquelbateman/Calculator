// User input
let numDisplay = document.getElementById("numDisplay");
let decBtn = document.getElementById("decBtn");
let cBtn = document.getElementById("cBtn");
let divBtn = document.getElementById("divBtn");
let mulBtn = document.getElementById("mulBtn");
let minBtn = document.getElementById("minBtn");
let plusBtn = document.getElementById("plusBtn");
let backBtn = document.getElementById("backBtn");
let entBtn = document.getElementById("entBtn");
let zerBtn = document.getElementById("zerBtn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let inputString = "";
let result = 0;

zerBtn.addEventListener("click", function(){
    numPress(0);
})
btn1.addEventListener("click", function(){
    numPress(1);
})
btn2.addEventListener("click", function(){
    numPress(2);

})
btn3.addEventListener("click", function(){
    numPress(3);

})
btn4.addEventListener("click", function(){
    numPress(4);

})
btn5.addEventListener("click", function(){
    numPress(5);

})
btn6.addEventListener("click", function(){
    numPress(6);

})
btn7.addEventListener("click", function(){
    numPress(7);

})
btn8.addEventListener("click", function(){
    numPress(8);

})
btn9.addEventListener("click", function(){
    numPress(9);

})

function numPress(num){
    if (numDisplay.innerText == 0){
    numDisplay = "";
    numDisplay.innerText += num
    }
}
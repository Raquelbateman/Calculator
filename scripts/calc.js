// User input
let numDisplay = document.getElementById("numDisplay");
let prevDisplay = document.getElementById("prevDisplay");
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
let firstNum = 0;
let secondNum = 0;
let currentOp = "";
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
decBtn.addEventListener("click", function(){
    numPress(".");
})


minBtn.addEventListener("click", function(){
    opPress("-");
})
plusBtn.addEventListener("click", function(){
    opPress("+");
})
divBtn.addEventListener("click", function(){
    opPress("/");
})
mulBtn.addEventListener("click", function(){
    opPress("X");
})

entBtn.addEventListener("click", function(){
    mathTime();
})
cBtn.addEventListener("click", function(){
    resetScreen();
})
backBtn.addEventListener("click", function(){
    backSpace();
})


// Backspace function when user wants to delete a part of the string
function backSpace(){
    // Using slice method to grab the first character and going back one character, essentially only cutting the last part of the given string
    numDisplay.innerText = numDisplay.innerText.slice(0, -1); 
}

// Function for when CE button is hit to reset all values in the function
function resetScreen(){
    firstNum = 0;
    secondNum = 0;
    currentOp = "";
    result = 0; 
    prevDisplay.innerText = "";
    numDisplay.innerText = 0;

}

// Function is called when a user hits any numButton and the number they pressed is inserted 
function numPress(num){
    // if default value of 0 is still on screen the overwrite with new value user is giving
    if (numDisplay.innerText == 0){
        numDisplay.innerText = num;
    }
    // When a user has completed an operation and wants to start a new equation then the given value on screen is overwritten
    else if (numDisplay.innerText == result){
        resetScreen();
        numDisplay.innerText = num;
    }
    // Adding other numbers user is clicking onto the screen
    else{
    numDisplay.innerText += num;
    }
}

// Function is called when an operator is pressed
function opPress(op){
    // When the first op is pressed, the first num is saved from what text is inside the current display, and show on left hand of screen to show user what is currently the operation
    if(numDisplay.innerText != 0 && firstNum == 0){
        currentOp = op;
        firstNum = Number(numDisplay.innerText);
        prevDisplay.innerText = firstNum + " " + currentOp;
        numDisplay.innerText = 0;
    }
    // once the operator is pressed again after the first time and first number is saved then the result is printed out from the mathTime function being called
    else if (firstNum != 0 && numDisplay.innerText != 0 && result == 0){
        mathTime();
    }
    // if statement to see if current operator wants to be overwritten if second number hasn't been created yet
    if (firstNum != 0 && secondNum == 0 && result ==0 && currentOp != ""){
        currentOp = op;
        secondNum = 0;
        prevDisplay.innerText = firstNum + " " + currentOp;
    }
    // Adding onto the next equation by using the current result as the first number once an operator is pressed based off of the first equation already being complete
    if (firstNum !=0 && secondNum != 0 && currentOp != ""){
        currentOp = op;
        firstNum = result;
        secondNum = 0;
        result = 0;
        prevDisplay.innerText = firstNum + " " + currentOp;
        numDisplay.innerText = "";
    }
}

// Function is called when it is time to do math/operator is pressed/= is pressed
function mathTime(){
    // Displayed value is saved into secondnum variable
    secondNum = Number(numDisplay.innerText);
    // All cases of which operator is being called and what math to do
    switch(currentOp){
        case "+":
        result = firstNum + secondNum;
        break;

        case "-":
        result = firstNum - secondNum;
        break;

        case "X":
        result = firstNum * secondNum;
        break;

        case "÷":
        result = firstNum / secondNum;
        break;
    }
    // Setting prev display to show previous equation and all values user gave
    prevDisplay.innerText = firstNum + " " + currentOp + " " + secondNum + " =";
    // Set out result to main display for user to see
    numDisplay.innerText = result;
}
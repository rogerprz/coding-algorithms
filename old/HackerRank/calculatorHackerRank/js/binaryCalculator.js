//       res    Contains the result of button presses.
// btns    A button container that displays all eight calculator buttons.
// 0    btn0    A button expressing binary digit .
// 1    btn1    A button expressing binary digit .
// C    btnClr    A button to clear the contents of .
// =    btnEql    A button to evaluate the contents of the expression in .
// +    btnSum    A button for the addition operation.
// -    btnSub    A button for the subtraction operation.
// *    btnMul    A button for the multiplication operation.
// /    btnDiv    A button for the integer division operation.
let zeroBtn = document.getElementById('btn0');
let oneBtn = document.getElementById('btn1');
let clearBtn = document.getElementById('btnClr');
let equalBtn = document.getElementById('btnEql');
let sumBtn = document.getElementById('btnSum');
let subBtn = document.getElementById('btnSub');
let multiBtn = document.getElementById('btnMul');
let divBtn = document.getElementById('btnDiv');

zeroBtn.innerHTML  = '0';
oneBtn.innerHTML   = '1';
clearBtn.innerHTML = 'C';
equalBtn.innerHTML = '=';
sumBtn.innerHTML   = '+';
subBtn.innerHTML   = '-'
multiBtn.innerHTML = "*";
divBtn.innerHTML   = "/";




// Styling. The documesnt's elements must have the following styles:

// body has a width of 33%.
// res has a background-color of lightgray, a border that is solid, a height of 48px, and a font-size of 20px.
// btn0 and btn1 have a background-color of lightgreen and a color of brown.
// btnClr and btnEql have a background-color of darkgreen and a color of white.
// btnSum, btnSub, btnMul, and btnDiv have a background-color of black, a color of red.
// All the buttons in btns have a width of 25%, a height of 36px, a font-size of 18px, margin of 0px, and float value left.

console.log("hello");
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

<div id='res' class='calculatorContainer'>

  <div>
    <button id='btn0' class='buttonClass'></button>
    <button id='btn1' class='buttonClass'></button>
    <button id='btnClr' class='buttonClass'>3</button>
    <button id='btnEql' class='buttonClass'>4</button>
    <button id='btnSum' class='buttonClass'>4</button>
    <button id='btnSub' class='buttonClass'>4</button>
    <button id='btnMul' class='buttonClass'>4</button>
    <button id='btnDiv' class='buttonClass'>4</button>
  </div>


</div>



// Styling. The document's elements must have the following styles:

// body has a width of 33%.
// res has a background-color of lightgray, a border that is solid, a height of 48px, and a font-size of 20px.
// btn0 and btn1 have a background-color of lightgreen and a color of brown.
// btnClr and btnEql have a background-color of darkgreen and a color of white.
// btnSum, btnSub, btnMul, and btnDiv have a background-color of black, a color of red.
// All the buttons in btns have a width of 25%, a height of 36px, a font-size of 18px, margin of 0px, and float value left.

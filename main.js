let firstNumber
let secondNumber
let operator
let result

function handleNumbers( numberValue )
{
  firstNumber = document.getElementById( "screen" ).innerHTML += numberValue
  if ( operator !== "" )
  {
    secondNumber = document.getElementById( "screen" ).innerHTML
  } else 
  {
    firstNumber = document.getElementById( "screen" ).innerHTML
  }
  console.log( typeof numberValue )
  console.log( "firstNumber is " + firstNumber )
  console.log( "secondNumber is " + secondNumber )


  console.log( "this is type of first number" + typeof firstNumber )
  console.log( "this is type of second number" + typeof secondNumber )
}

function handleOperators( clickedOperator )
{
  console.log( "this is operator" + operator )
  console.log( "this is type of operator" + typeof operator )

  document.getElementById( "screen" ).innerHTML += clickedOperator

  operator = clickedOperator
}

function add( firstNumber, secondNumber )
{
  return firstNumber + secondNumber
}

function subtract()
{
  return firstNumber - secondNumber
}

function multiply()
{
  return firstNumber * secondNumber
}

function divide()
{
  return firstNumber / secondNumber
}

function clearScreen()
{
  document.getElementById( "screen" ).innerHTML = ""
}


function handleCalculation( firstNumber, secondNumber )
{


  document.getElementById( "screen" ).innerHTML = ""

  if ( operator == "+" )
  {
    result = firstNumber + secondNumber
  } else if ( operator == "-" )
  {
    result = firstNumber - secondNumber
  } else if ( operator == "*" )
  {
    result = firstNumber * secondNumber
  } else if ( operator == "/" )
  {
    result = firstNumber / secondNumber
  }
  console.log( "this should be result" + result )
}

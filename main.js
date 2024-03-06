let firstNumber = ""
let secondNumber = ""
let operator = ""

function handleNumbers( numberValue )
{
  firstNumber = document.getElementById( "screen" ).innerHTML += numberValue
  if ( operator === "" )
  {
    firstNumber = document.getElementById( "screen" ).innerHTML
  } else
  {
    secondNumber = document.getElementById( "screen" ).innerHTML
  }
}

function handleOperators( clickedOperator )
{
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


function handleCalculation( operator )
{
  if ( operator == "+" )
  {
    add()
  } else if ( operator == "-" )
  {
    subtract()
  } else if ( operator == "*" )
  {
    multiply()
  } else if ( operator == "/" )
  {
    divide()
  }
}

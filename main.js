let firstNumber = ""
let secondNumber = ""
let operator = ""

function handleNumbers( numberValue )
{
  document.getElementById( "screen" ).innerHTML += numberValue
}

function handleOperators( operator )
{
  document.getElementById( "screen" ).innerHTML += operator
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
  } else if ( operator == "&times;" )
  {
    multiply()
  } else if ( operator == "&div;" )
  {
    divide()
  }
}

console.log( firstNumber )
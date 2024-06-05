let firstNumber = '';
let secondNumber = '';
let operator = '';
let result;

function handleNumberInput( numberValue )
{
  if ( operator !== '' )
  {
    secondNumber += numberValue;
  } else
  {
    firstNumber += numberValue;
  }

  updateScreen()
}

function handleOperatorInput( clickedOperator )
{
  if ( clickedOperator === '+' || clickedOperator === '-' || clickedOperator === '*' || clickedOperator === '/' )
  {
    handleCalculation();
    operator = clickedOperator;
    updateScreen( clickedOperator );
  }
}

function updateScreen( content = '' )
{
  let displayedContent = content !== '' ? content : firstNumber + operator + secondNumber;
  displayedContent = displayedContent.replace( /\*/g, '&times;' ).replace( /\//g, '&div;' );

  document.getElementById( 'screen' ).innerHTML = displayedContent;
}

function add( firstNum, secondNum )
{
  return parseFloat( firstNum ) + parseFloat( secondNum );
}

function subtract( firstNum, secondNum )
{
  return parseFloat( firstNum ) - parseFloat( secondNum );
}

function multiply( firstNum, secondNum )
{
  return parseFloat( firstNum ) * parseFloat( secondNum );
}

function divide( firstNum, secondNum )
{
  return parseFloat( firstNum ) / parseFloat( secondNum );
}

function clearScreen()
{
  firstNumber = '';
  secondNumber = '';
  operator = '';
  updateScreen();
}

function toggleSign()
{
  if ( document.getElementById( "screen" ).innerHTML == "" )
  {
    // If nothing is displayed add negative symbol
    firstNumber = "-0";
  } else
  {
    if ( operator !== "" )
    {
      // If operator is present do conversion to second number
      if ( secondNumber > 0 )
      {
        // If number is positive convert to negative
        secondNumber = 0 - secondNumber
      } else
      {
        // If number is negative convert to positive
        secondNumber = Math.abs( secondNumber )
      }
    } else
    {
      if ( firstNumber > 0 )
      {
        // If number is positive convert to negative
        firstNumber = 0 - firstNumber
      } else
      {
        // If number is negative convert to positive
        firstNumber = Math.abs( firstNumber )
      }
    }

    document.getElementById( "screen" ).innerHTML = firstNumber;
  }
}

function handleCalculation()
{
  result = '';

  if ( operator !== '' && secondNumber !== '' )
  {
    if ( operator === '+' )
    {
      result = add( firstNumber, secondNumber );
    } else if ( operator === '-' )
    {
      result = subtract( firstNumber, secondNumber );
    } else if ( operator === '*' )
    {
      result = multiply( firstNumber, secondNumber );
    } else if ( operator === '/' )
    {
      if ( parseFloat( secondNumber ) === 0 )
      {
        result = 'Error: cannot divide by zero';
      } else
      {
        result = divide( firstNumber, secondNumber );
      }
    }

    document.getElementById( 'screen' ).innerHTML = result;
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
  }
}

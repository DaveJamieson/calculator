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

  updateScreen();
}

function handleOperatorInput( clickedOperator )
{
  if ( clickedOperator === '+' || clickedOperator === '-' || clickedOperator === '*' || clickedOperator === '/' )
  {
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

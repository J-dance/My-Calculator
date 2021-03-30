
// declare global variables:
let newValue = '';
let valueOne = '';
let operatorValue = '';
let answerEquationOld = '';
let answerValue = '';
let answerEquation = '';
let answerEquationOldest = '';

// delete last character
const delNumber = () => {
  newValue = newValue.slice(0, -1);
  document.getElementById('displayText').value = newValue;
}

// ---------------------------
//  clear display -> clear history
const clearDisplay = () => {
  document.getElementById("displayText").value = '';
  document.getElementById("displayText2").value = '';
  document.getElementById("displayText3").value = '';
  document.getElementById("displayText4").value = '';
  newValue = '';
  valueOne = '';
  operatorValue = '';
  answerEquationOld = '';
  answerEquation = '';
  answerEquationOldest = '';
}

//  --------------------------
// operator input button
const inputOperator = (operator) => {
  // log and store operator selected
  operatorValue = operator;
  console.log(`this is the operator selected: ${operatorValue}`);

  // store previous value and clear the current display
  valueOne = newValue;
  document.getElementById("displayText").value = '';

  // return operator and value one variable
  // return operatorValue;
  // return valueOne;
}

//  --------------------------
// input for non-numeric button
const inputOther = (item) => {
  // only one decimal allowed 
  if (item == '.' && newValue.includes('.')) {
    
  }
  else {
    newValue = newValue + item;
    document.getElementById("displayText").value = newValue;
  }
}

//  --------------------------
// function for inputing previous answer
const inputAnswer = () => {
  document.getElementById("displayText").value += 'Ans';
  newValue = answerValue;
}

//  --------------------------
// input number button to display
const inputNumber = (num) => {
  // log current value
  let currentValue = document.getElementById('displayText').value;
  console.log(`This is the value before clicking button ${currentValue}`);

  // add new number from button to current value
  document.getElementById("displayText").value += num;
  
  // log and return new value
  newValue = document.getElementById('displayText').value;
  console.log(`this is the new value ${newValue}`);
  console.log("this newvalue type is: ", typeof(newValue));

  // return newValue;
  // valueOne now has the first number stored
  // in operator function store this as current value
}

//  --------------------------
// percentage conversion button (not currently in use)
const convertPercentage = () => {
  answerValue = newValue / 100; 
  
  // clear displayText 
  document.getElementById('displayText').value = '';
 
  // place current equation in displaytext2 with answer
  document.getElementById('displayText2').value = answerValue + '%';
 
  // place old equation in displaytext3
  document.getElementById('displayText3').value = answerEquationOld;

  // place old equation in displaytext4
  document.getElementById('displayText4').value = answerEquationOldest;

  // let current equation = old equation
  answerEquationOldest = answerEquationOld;
  answerEquationOld = answerEquation;
}

//  --------------------------
//  = button runs operator functions
const submitEquals = () => {
  // convert inputs to numbers
  valueOne = Number(valueOne);
  newValue = Number(newValue);

  // log parameters
  // console.log(`operator is ${operatorValue}`);
  // console.log(`newvalue is ${newValue}`);
  // console.log(`valueOne is ${valueOne}`);

  // switch case for each operator
  switch (operatorValue) {

    case '+':
      answerValue = valueOne + newValue;
      break;
    
    case '-':
      answerValue = valueOne - newValue;
      break;
    
    case '/':
      answerValue = valueOne / newValue;
      operatorValue = '\u00f7';
      break;

    case '*':
      answerValue = valueOne * newValue;
      operatorValue = '\u00d7';
      break;

    case '^':
      answerValue = Math.pow(valueOne, newValue);
      break;

    default:
      answerValue = 'Error';
      break;
  }
  // fix decimal places of answer
  // answerValue = answerValue.toFixed(2);
  // equation string
  answerEquation = `${valueOne} ${operatorValue} ${newValue} = ${answerValue}`; 
  
  // clear displayText 
  document.getElementById('displayText').value = '';

  // place current equation in displaytext2 with answer
  document.getElementById('displayText2').value = answerEquation;

  // place old equation in displaytext3
  document.getElementById('displayText3').value = answerEquationOld;

  // place old equation in displaytext4
  document.getElementById('displayText4').value = answerEquationOldest;

  // let current equation = old equations
  answerEquationOldest = answerEquationOld;
  answerEquationOld = answerEquation;
  console.log(answerValue);

  // let newValue and valueOne be deleted once calculation finished
  newValue = '';
  valueOne = '';
}

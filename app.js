// dom
const headerContent = document.querySelector("#header-content");
const calculating = document.querySelector("#calculating");

// regex used for filtering buttons used
const regex = /[\d(\.)]/;
const mathregex = /[-+*%\/]/;

// check if it is the result or if a dot has been typed.
let isResult = false;
let typedOneDot = false;

// used for storing the calculating data
let calculatingArr = [];

// buttons
const buttons = document.querySelectorAll(".calc-btn");

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    if (headerContent.textContent.length < 15) {
      if (regex.test(e.target.textContent)) {
        if (!isResult) {
          if (e.target.textContent === ".") {
            if (!typedOneDot) {
              headerContent.textContent += e.target.textContent;
              typedOneDot = true;
            } else {
            }
          } else {
            headerContent.textContent += e.target.textContent;
          }
        }
      }
      // check if target is +
      if (mathregex.test(e.target.textContent)) {
        adding(headerContent.textContent, e.target.textContent);
      }
      //   check if target is =
      if (e.target.textContent === "=") {
        result(calculatingArr);
      }
    }

    // reset btn
    if (e.target.textContent === "AC") {
      reset();
    }
  })
);

function reset() {
  headerContent.textContent = "";
  calculating.textContent = "";
  calculatingArr = [];
  isResult = false;
  typedOneDot = false;
}

function adding(numbers, operator) {
  typedOneDot = false;
  isResult = false;

  //avoid using too much space
  if (calculating.textContent.length > 20) {
    calculating.textContent = "";
  }
  // adding the values to the calculating array
  calculatingArr.push(numbers + operator);
  // changing the top of the header with the values
  calculating.textContent += headerContent.textContent + operator;
  // reset input
  headerContent.textContent = "";
}

function result(arr) {
  // adding the last num entered to the array
  if (calculatingArr.length < 1) {
  } else {
    calculatingArr.push(headerContent.textContent);
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i];
    }
    const answer = eval(str);
    calculating.textContent += headerContent.textContent + "=";
    headerContent.textContent = answer;
    calculatingArr = [];
    isResult = true;
  }
}

function calculate(input) {}

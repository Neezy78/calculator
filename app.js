// dom
const headerContent = document.querySelector("#header-content");
const calculating = document.querySelector("#calculating");
const regex = /[\d(\.)]/;
const mathregex = /[-+*%\/]/;

let isResult = false;

let calculatingArr = [];
// buttons
const buttons = document.querySelectorAll(".calc-btn");

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    if (headerContent.textContent.length < 10) {
      if (regex.test(e.target.textContent)) {
        if (!isResult) {
          headerContent.textContent += e.target.textContent;
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
}

function adding(numbers, operator) {
  isResult = false;
  // first array
  if (calculating.textContent.length > 20) {
    calculating.textContent = "";
  }
  calculatingArr.push(numbers + operator);
  console.log(calculatingArr);
  calculating.textContent += headerContent.textContent + operator;
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

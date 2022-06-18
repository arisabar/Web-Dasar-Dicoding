const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};

function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

function negativeNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

function resultNumber() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert("anda belum menetapkan operator");
    return;
  }

  let result = 0;

  if (calculator.operator === "+") {
    result =
      parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else if (calculator.operator === "-") {
    result =
      parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  } else {
    clearCalculator();
  }

  calculator.displayNumber = result;
  console.log(calculator.firstNumber + "dari resultNumber(firstNumber)");
  console.log(calculator.displayNumber + "dari resultNumber(dislplay)");
  console.log(result);
}
// console.log(calculator.waitingForSecondNumber);
function handleOperator(op) {
  if (!calculator.waitingForSecondNumber) {
    calculator.operator = op;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
    console.log(calculator.firstNumber);
    calculator.displayNumber = `${calculator.firstNumber}${op}`;
  } else {
    alert("Operator sudah di tetapkan");
  }
}

const buttons = document.querySelectorAll(".button");
for (const button of buttons) {
  // console.log(button);
  button.addEventListener("click", (event) => {
    const narget = event.target;
    console.log(narget.innerText);
    if (narget.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (narget.classList.contains("negative")) {
      negativeNumber();
      updateDisplay();
      return;
    }

    if (narget.classList.contains("equals")) {
      resultNumber();
      updateDisplay();

      return;
    }
    if (narget.classList.contains("operator")) {
      handleOperator(narget.innerText);
      updateDisplay();
      return;
    }

    inputDigit(narget.innerText);
    updateDisplay();
  });
}

// const btnArray = Array.from(buttons);

// // console.log(btnArray[0]);
// btnArray.forEach((items) => {
//   console.log(items.outerText);
//   items.addEventListener("click", () => {
//     if (items.classList.contains("clear")) {
//       clearCalculator();
//       updateDisplay();
//       return;
//     }
//     // console.log(getItems);
//     inputDigit(items.outerText);
//     updateDisplay();
//   });

//   //
// });

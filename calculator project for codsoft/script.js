let result = document.getElementById("result");
let buttons = document.querySelectorAll("button[type='button']");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let currentValue = result.value;
    let buttonValue = e.target.value;

    if (buttonValue === "=") {
      try {
        result.value = eval(currentValue);
      } catch (error) {
        result.value = "Error";
      }
    } else if (buttonValue === "C") {
      result.value = "";
    } else {
      result.value = currentValue + buttonValue;
    }
  });
});
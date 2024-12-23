const check = document.querySelector("#check");
const number = document.querySelector("#number");
const result = document.querySelector("#result");
check.onclick = function () {
  const input = number.value;
  switch (input) {
    case "":
        result.innerHTML = "Please enter a number between 1 to 10.";
  }
  switch (parseInt(input)) {
    case 6:
      result.innerHTML = "Correct!";
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      result.innerHTML = "The correct number is lower.";
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      result.innerHTML = "The correct number is higher.";
      break;
    default:
      result.innerHTML = "Please enter a number between 1 to 10.";
      break;
  }
};

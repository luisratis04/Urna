let currentNumber = "";

function addNumber(number) {
  let digitName = "digito-";

  if (currentNumber.length === 2) return;

  if (currentNumber.length === 0) digitName += "1";
  else digitName += "2";

  const input = document.querySelector(`input#${digitName}`);
  currentNumber += number;
  input.setAttribute("value", number);
}

function clean() {
  console.log("foo");
  currentNumber = "";

  document.querySelector("input#digito-1").removeAttribute("value");
  document.querySelector("input#digito-2").removeAttribute("value");
}

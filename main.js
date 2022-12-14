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
  currentNumber = "";

  document.querySelector("input#digito-1").removeAttribute("value");
  document.querySelector("input#digito-2").removeAttribute("value");
}

async function vote() {
  if (currentNumber.length !== 2) return;

  fetch("http://localhost:3333/votes", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vote: currentNumber,
    }),
  });

  clean();
}

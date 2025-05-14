let result = "";

let buttons = document.getElementsByTagName("button");
let output = document.getElementById("output");

let operators = ['+', '-', '*', '/', '%', '.']
let previousOperator;

for (let button of buttons)
{
  button.addEventListener("click", function () {calculate(button.textContent.trim())});
}

function calculate(buttonText){
  if(isFinite(buttonText)){
    let number = parseInt(buttonText, 10);
    result += number;
    output.textContent = result;
  } else if (operators.includes(buttonText)){
    if (!operators.includes(result[result.length-1] || result !== "")){
      result += buttonText;
      output.textContent = result;
    }
  } else if (buttonText === "="){
    try{
      result = eval(result)
      result = result.toString();
      output.textContent = result;
    }
    catch{
      output.textContent = "something went wrong";
      result = "";
    }
  } else if (buttonText === "C"){
    result = "";
    output.textContent = "0";
  }
}

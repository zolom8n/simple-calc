const mathsymbols = ["+", "-", "/", "*", "."]; //symbols that cannot be repeated after themselves in expression
let mathexpression = "";
const buttons = Array.from(document.querySelectorAll(".btnstyle"));
buttons.forEach((button) => {
  if (mathsymbols.includes(button)) {
    console.log(button);
  }
});

buttons.forEach((button) => {
  const btnvalue = button.value;
  button.setAttribute("onClick", `btnClick('${btnvalue}');`);
});

const btnClick = (val) => {
  const resultInput = document.querySelector("input");
  const lastchar = mathexpression.charAt(mathexpression.length - 1);
  switch (val) {
    case "count":
      const expression = new String(resultInput.value);
      resultInput.value = eval(String(expression));
      mathexpression = "";
      break;
    case "remove":
      mathexpression = mathexpression.substring(0, mathexpression.length - 1);
      resultInput.value = mathexpression;
      break;
    default:
      if (
        ((val == "-" || isNaN(val) == false) && mathexpression == "") ||
        mathexpression.length != 0
      ) {
        if (mathsymbols.includes(lastchar) && mathsymbols.includes(val)) {
          console.log(document.querySelector(`button[value = '${val}']`).value);
        } else {
          mathexpression += val;
        }
        resultInput.value = mathexpression;
      } else {
        console.log(`Nieprawidłowe wyrazenie matematyczne! val = ${val}`);
      }
  }
};

const button = document.querySelectorAll("button");
const input = document.querySelector("input");
console.log(input);
let s = "";

let innerHTML = toString(button.innerHTML);
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "C") {
      s = "";
      input.value = s;
    } else if (e.target.innerHTML == "=") {
      try {
        s = eval(s);
        input.value = s;
      } catch (error) {
        input.value = "ERROR";
        s = "";
      }
    } else if (e.target.innerHTML == "x") {
      s = s + "*";
      console.log(s);
      input.value = s;
    } else if (e.target.innerHTML == "÷") {
      s = s + "/";
      input.value = s;
    } else {
      s = s + e.target.innerHTML;
      input.value = s;
      console.log("c", s);
    }
  });
});

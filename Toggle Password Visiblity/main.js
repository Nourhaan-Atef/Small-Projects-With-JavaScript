// Variables
let myInput = document.getElementById("inp");
let myButton = document.getElementById("btn");
// Action (Function)
myButton.addEventListener("click", () => {
  if (myButton.getAttribute("data-text") == "show") {
    myInput.setAttribute("type", "text");
    myButton.setAttribute("data-text", "Hide");
    myButton.innerHTML = "Hide";
  } else {
    myInput.setAttribute("type", "password");
    myButton.setAttribute("data-text", "show");
    myButton.innerHTML = "show";
  }
});

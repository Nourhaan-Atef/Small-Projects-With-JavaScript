let container = document.querySelector(".container");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  let p = document.createElement("p");
  p.setAttribute("class", "message");
  if (inp.value == "") {
  } else {
    p.innerText = inp.value;
    console.log(p);
    container.appendChild(p);
    inp.value = "";
  }
});

document.body.appendChild(container);

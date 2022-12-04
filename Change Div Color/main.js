let btn = document.getElementById("btn");
let div = document.getElementById("div");

let colors = ["Teal","Yellow","Purple","lightblue","darkred"]
let count =0;
btn.addEventListener("click",()=>{
if(count<5){
div.style.background=colors[count];
}else{
    count=0;
}
count++;
})
let image = document.querySelector(".slideShow");
let Images = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg"];

let counter = 0;

function slideShow() {
  image.setAttribute("src", Images[counter]);

  if (counter == Images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  setTimeout(() => {
    slideShow();
  }, 2000);
}

slideShow();

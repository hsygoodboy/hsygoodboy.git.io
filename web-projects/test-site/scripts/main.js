const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/11.png") {
    myImage.setAttribute("src", "images/22.png");
  } else {
    myImage.setAttribute("src", "images/11.png");
  }
};

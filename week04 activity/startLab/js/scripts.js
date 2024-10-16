const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const closeButton = document.querySelector("#closeButton");
const diologBox = document.querySelector("#dialogBox");
const dialogText = document.querySelector("#diologText")

openButton1.addEventListener("click", () => {
    diologBox.showModal();
    dialogText.innerHTML = "Apple";
});

openButton2.addEventListener("click", () => {
    diologBox.showModal();
    dialogText.innerHTML = "Orange";
});

openButton3.addEventListener("click", () => {
    diologBox.showModal();
    dialogText.innerHTML = "Banana";
});

closeButton.addEventListener("click", () => {
    diologBox.close();
});
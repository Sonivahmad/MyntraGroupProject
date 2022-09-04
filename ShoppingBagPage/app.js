
const taskBtn = document.querySelector(".btn");

  
taskBtn.addEventListener("click", (e) => {
  // Display modal
  console.log("Clicked on the button");
  modalCont.style.display = "flex";
  mainCont.classList.toggle(".blur")
});
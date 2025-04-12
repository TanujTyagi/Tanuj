const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.id == e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});

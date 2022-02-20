let count = 0;

const number = document.querySelector(".num");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (anish) {
    const clicked = anish.currentTarget.classList;
    if (clicked.contains("btn-decrease")) {
      count--;
    } else if (clicked.contains("btn-increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      number.style.color = "green";
    }
    if (count < 0) {
      number.style.color = "red";
    }
    if (count === 0) {
      number.style.color = "black";
    }
    number.innerHTML = count;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});

function moveLeft() {
  let left = parseInt(window.getComputedStyle(ss).getPropertyValue("left"));

  left -= 100;
  // keep spaceship within left side of screen
  if (left >= 0) {
    ss.style.left = left + "px";
  }
}

function moveRight() {
  let left = parseInt(window.getComputedStyle(ss).getPropertyValue("left"));

  left += 100;
  // keep spaceship within right side of screen
  if (left < 1000) {
    ss.style.left = left + "px";
  }
}

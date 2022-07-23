// function moveLeft() {
//   let left = parseInt(
//     window.getComputedStyle(character).getPropertyValue("left")
//   );

//   left -= 100;
//   // keep character within left side of screen
//   if (left >= 0) {
//     character.style.left = left + "px";
//   }
// }

// function moveRight() {
//   let left = parseInt(
//     window.getComputedStyle(character).getPropertyValue("left")
//   );

//   left += 100;
//   // keep character within right side of screen
//   if (left < 300) {
//     character.style.left = left + "px";
//   }
// }

// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowLeft") {
//     moveLeft();
//   }
//   if (event.key === "ArrowRight") {
//     moveRight();
//   }
// });

const block = document.getElementById("asteroid");
block.addEventListener("animationiteration", () => {
  let random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + "px";
});

setInterval(function () {
  let characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  let blockTop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );
  if (characterLeft === blockLeft && blockTop < 500 && blockTop > 300) {
    alert("Game Over");
    block.style.animation = "none";
  }
}, 1);

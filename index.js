// function newAsteroid(path, leftPos, bottomPos, backgroundSize) {
//   const div = document.createElement("div");
//   div.style.backgroundImage = `url(${path})`;
//   div.style.width = leftPos + "px";
//   div.style.height = bottomPos + "px";

//   div.style.backgroundSize = backgroundSize + "px";
//   div.style.display = "flex";
//   div.style.alignItems = "center";
//   div.style.justifyContent = "center";

//   //   const text = document.createElement("h2");
//   //   text.innerHTML = "Testing Word";
//   //   div.appendChild(text);

//   document.body.append(div);
//   return div;
// }

// newAsteroid("assets/asteroid-1.png", 150, 150, 150);

function moveLeft() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );

  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
}

function moveRight() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );

  left += 100;
  if (left < 300) {
    character.style.left = left + "px";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});

const block = document.getElementById("block");
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

// #asteroid {
//   width: 100px;
//   height: 100px;
//   background-color: black;
//   position: relative;
//   top: 500px;
//   animation: slide 2s infinite;
// }

function newAsteroid(path) {
  const div = document.createElement("div");

  // setting ID attribute
  div.setAttribute("id", "asteroid");

  div.style.backgroundImage = `url(${path})`;
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundSize = "100px";
  //   div.style.display = "flex";
  //   div.style.alignItems = "center";
  //   div.style.justifyContent = "center";
  div.style.position = "relative";
  div.style.top = "500px";
  div.style.animation = "slide 4s infinite";

  //   const text = document.createElement("h2");
  //   text.innerHTML = "Hello";
  //   div.appendChild(text);

  document.getElementById("game").appendChild(div);
  //   document.body.append(div);
  //   return div;
}

newAsteroid("assets/asteroid-1.png");

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

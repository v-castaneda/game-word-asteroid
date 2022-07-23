function newAsteroid(filePath) {
  // create div element for asteroid and assign ID
  const div = document.createElement("div");
  div.setAttribute("id", "asteroid");

  // set background image of div to asteroid
  div.style.backgroundImage = `url(${filePath})`;

  // set style of falling asteroid
  const divSize = 100;
  div.style.width = `${divSize}px`;
  div.style.height = `${divSize}px`;
  div.style.backgroundSize = `${divSize}px`;
  div.style.position = "relative";
  div.style.top = "500px";
  div.style.backgroundRepeat = "no-repeat";
  div.style.animation = "slide 4s infinite";

  document.getElementById("game").appendChild(div);
}

const asteroid = document.getElementById("asteroid");
console.log(asteroid);

// block.addEventListener("animationiteration", () => {
//   let random = Math.floor(Math.random() * 3);
//   left = random * 100;
//   block.style.left = left + "px";
// });

// setInterval(function () {
//   let ssLeft = parseInt(
//     window.getComputedStyle(spaceship).getPropertyValue("left")
//   );
//   let asteroidLeft = parseInt(
//     window.getComputedStyle(asteroid).getPropertyValue("left")
//   );
//   let asteroidTop = parseInt(
//     window.getComputedStyle(asteroid).getPropertyValue("top")
//   );
//   if (ssLeft === asteroidLeft && asteroidTop < 500 && asteroidTop > 300) {
//     alert("Game Over");
//     asteroid.style.animation = "none";
//   }
// }, 1);

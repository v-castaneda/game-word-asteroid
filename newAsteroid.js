class Asteroid {
  constructor(filePath) {
    // create div element for asteroid and assing ID
    const div = document.createElement("div");
    div.setAttribute("id", "asteroid");

    // set background image of div to asteroid
    div.style.backgroundImage = `url(${filePath})`;

    document.getElementById("game").appendChild(div);
  }

  setFallLane(left) {
    // set css of falling asteroid
    const object = document.getElementById("asteroid");
    const divSize = 100;
    object.style.width = `${divSize}px`;
    object.style.height = `${divSize}px`;
    object.style.backgroundSize = `${divSize}px`;
    object.style.position = `relative`;
    object.style.top = `500px`;
    object.style.backgroundRepeat = "no-repeat";
    object.style.left = `${left}px`;
    object.style.animation = "slide 4s infinite";
  }

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
}

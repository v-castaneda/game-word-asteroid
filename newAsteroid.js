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

function newSpaceship(filePath) {
  //create div element and assing ID (ss = spaceship)
  const object = document.createElement("div");
  object.setAttribute("id", "ss");

  //set background image of spaceship figure
  object.style.backgroundImage = `url(${filePath})`;

  //set spaceship dimensions
  const imgSize = 75;
  object.style.width = `${imgSize}px`;
  object.style.height = `${imgSize}px`;
  object.style.backgroundSize = `${imgSize}px`;
  object.style.position = "relative";
  object.style.left = "500px";
  object.style.top = "500px";
  object.style.padding = 0;
  object.style.borderWidth = 0;
  object.style.backgroundRepeat = "no-repeat";

  //appending to DOM
  document.getElementById("game").appendChild(object);
}

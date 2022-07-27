function newSpaceship(filePath) {
  //create div element and assing ID (ss = spaceship)
  const object = document.createElement("div");
  object.setAttribute("id", "ss");

  //set background image of spaceship figure
  object.style.backgroundImage = `url(${filePath})`;

  //set spaceship dimensions
  const imgSize = 100;
  object.style.width = `${imgSize}px`;
  object.style.height = `${imgSize}px`;
  object.style.backgroundSize = `${imgSize}px`;
  object.style.position = "absolute";
  object.style.left = "500px";
  object.style.top = "600px";
  object.style.padding = 0;
  object.style.backgroundRepeat = "no-repeat";
  object.style.border = "solid";
  object.style.borderColor = "white";
  object.style.borderWidth = "1px";
  object.style.borderRadius = "25px";

  //appending to DOM
  document.getElementById("game").appendChild(object);
}

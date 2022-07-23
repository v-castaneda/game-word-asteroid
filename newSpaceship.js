function newSpaceship(filePath) {
  //create div element and assing ID (ss = spaceship)
  const div = document.createElement("div");
  div.setAttribute("id", "ss");

  //set background image of spaceship figure
  div.style.backgroundImage = `url(${filePath})`;

  //set spaceship dimensions
  const imgSize = 75;
  div.style.width = `${imgSize}px`;
  div.style.height = `${imgSize}px`;
  div.style.backgroundSize = `${imgSize}px`;
  div.style.position = "relative";
  div.style.left = "500px";
  div.style.top = "600px";
  div.style.backgroundRepeat = "no-repeat";

  //appending to DOM
  document.getElementById("game").appendChild(div);
}

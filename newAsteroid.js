function newAsteroid(path) {
  // create div element for asteroid and assign ID
  const div = document.createElement("div");
  div.setAttribute("id", "asteroid");

  // set background image of div to asteroid
  div.style.backgroundImage = `url(${path})`;

  // establish the box size of falling objects
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundSize = "100px";
  div.style.position = "relative";
  div.style.top = "500px";
  div.style.animation = "slide 4s infinite";

  document.getElementById("game").appendChild(div);

  return {
    element: element,
  };
}

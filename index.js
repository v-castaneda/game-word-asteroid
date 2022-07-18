function newImage(path, leftPos, bottomPos) {
  let object = document.createElement("img");
  object.src = path;
  object.style.position = "fixed";
  object.style.left = leftPos;
  object.style.bottomPos = bottomPos;
  object.style.width = "100px";
  document.body.append(object);
  return object;
}

// adding asteroid
const pathAsteroid1 = "./assets/asteroid-1.png";
newImage(pathAsteroid1, "100px", "100px");

newImage(pathAsteroid1, "600px", "100px");

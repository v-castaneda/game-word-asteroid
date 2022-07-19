function newAsteroid(path, leftPos, bottomPos, backgroundSize) {
  const div = document.createElement("div");
  div.style.backgroundImage = `url(${path})`;
  div.style.width = leftPos + "px";
  div.style.height = bottomPos + "px";

  div.style.backgroundSize = backgroundSize + "px";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";

  const text = document.createElement("h2");
  text.innerHTML = "Testing Word";
  div.appendChild(text);

  document.body.append(div);
  return div;
}

newAsteroid("assets/asteroid-1.png", 150, 150, 150);

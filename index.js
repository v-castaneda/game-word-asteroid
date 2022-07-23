newSpaceship("./assets/ship5.png");

// identify game with and divide into N lanes
const gameSize = document.getElementById("game").offsetWidth;
const numLanes = gameSize / 100;

const asteroid = new Asteroid("./assets/asteroid-1.png");
asteroid.setFallLane(300);

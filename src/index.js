import {loadProgressHandler, createProject, getNewTexture, hitTestRectangle, randomInt, contain } from './Utils'
import ActionListener from './ActionListener'

//Create a Pixi Application
let app,
    texturesList,
    state,
    explorer,
    dungeon,
    gameScene,
    treasure,
    door,
    healthBar,
    message,
    gameOverScene,
    explorerHit
let blobs = []

app = createProject()

document.body.appendChild(app.view)

PIXI.loader
  .add('../imgs/treasureHunter.json')
  .on('progress', loadProgressHandler)
  .load(setup)

function setup() {
  //Create the `gameScene` group
  gameScene = new PIXI.Container();
  app.stage.addChild(gameScene);
  //Create a `gameOverScene` group
  gameOverScene = new PIXI.Container();
  app.stage.addChild(gameOverScene);
  texturesList = PIXI.loader.resources['../imgs/treasureHunter.json'].textures
  //Create the `dungeon` sprite
  dungeon = getNewTexture(texturesList, 'dungeon.png')
  gameScene.addChild(dungeon)
  //Create the `door` sprite
  door = getNewTexture(texturesList, 'door.png')
  door.position.set(32, 0);
  gameScene.addChild(door)
  //Create the `player` sprite
  explorer = getNewTexture(texturesList, 'explorer.png')
  explorer.vx = 0//velocity
  explorer.vy = 0//velocity
  explorer.position.set(16, 16)
  gameScene.addChild(explorer)
  ActionListener(explorer)//Assign the player's keyboard controllers
  //Create the `treasure` sprite
  treasure = getNewTexture(texturesList, 'treasure.png')
  treasure.position.set(400, 400)
  gameScene.addChild(treasure)
  //Make the enemies
  let numberOfBlobs = 6,
  spacing = 48,
  xOffset = 150,
  speed = 2,
  direction = 1;

  for (let i = 0; i < numberOfBlobs; i++) {
    let blob = getNewTexture(texturesList, 'blob.png')
    let x = spacing * i + xOffset;
    let y = randomInt(0, app.stage.height - blob.height);
    blob.x = x;
    blob.y = y;
    blob.vy = speed * direction;
    direction *= -1;
    blobs.push(blob);
    gameScene.addChild(blob);
  }
  //Create the health bar
  healthBar = new PIXI.DisplayObjectContainer();
  healthBar.position.set(app.stage.width - 170, 4)
  gameScene.addChild(healthBar);

  //Create the black background rectangle
  let innerBar = new PIXI.Graphics();
  innerBar.beginFill(0x000000);
  innerBar.drawRect(0, 0, 128, 8);
  innerBar.endFill();
  healthBar.addChild(innerBar);

  //Create the front red rectangle
  let outerBar = new PIXI.Graphics();
  outerBar.beginFill(0xFF3300);
  outerBar.drawRect(0, 0, 128, 8);
  outerBar.endFill();
  healthBar.addChild(outerBar);
  healthBar.outer = outerBar;
  //Add some text for the game over message
  let style = new PIXI.TextStyle({
    fontFamily: "Futura",
    fontSize: 64,
    fill: "white"
  });
  message = new PIXI.Text("The End!", style);
  message.x = 120;
  message.y = app.stage.height / 2 - 32;
  gameOverScene.addChild(message);
  //set the game state to `play`
  state = play
  //add `gameScene` to the stage
  app.stage.addChild(gameScene)
  //animation
  app.ticker.add(() => gameLoop())
}

function play() {//All the game logic goes here
  //Move the explorer and 
  explorer.x += explorer.vx
  explorer.y += explorer.vy
  //contain explorer inside the dungeon
  contain(explorer, {x: 28, y: 10, width: 488, height: 480});
  //Move the blob monsters
  blobs.forEach(function(blob) {
    //Move the blob
    blob.y += blob.vy;
  
    //Check the blob's screen boundaries
    let blobHitsWall = contain(blob, {x: 28, y: 10, width: 488, height: 480});
  
    //If the blob hits the top or bottom of the stage, reverse
    //its direction
    if (blobHitsWall === "top" || blobHitsWall === "bottom") {
      blob.vy *= -1;
    }
  
    //Test for a collision. If any of the enemies are touching
    //the explorer, set `explorerHit` to `true`
    if(hitTestRectangle(explorer, blob)) {
      explorerHit = true;
    }
  });
  //Check for a collision between the blobs and the explorer
  if(explorerHit) {

    //Make the explorer semi-transparent
    explorer.alpha = 0.5;
  
    //Reduce the width of the health bar's inner rectangle by 1 pixel
    healthBar.outer.width -= 1;
    explorerHit = false;
  } else {
  
    //Make the explorer fully opaque (non-transparent) if it hasn't been hit
    explorer.alpha = 1;
  }
  //Check for a collision between the explorer and the treasure
  if (hitTestRectangle(explorer, treasure)) {
    treasure.x = explorer.x + 8;
    treasure.y = explorer.y + 8;
  }
  //Check for a collision between the treasure and the door
  if (hitTestRectangle(treasure, door)) {
    state = end;
    message.text = "You won!";
  }
  //Decide whether the game has been won or lost
  if (healthBar.outer.width < 0) {
    state = end;
    message.text = "You lost!";
  }
  //Change the game `state` to `end` when the game is finsihed
}

function gameLoop(delta) {
  //Runs the current game `state` in a loop and renders the sprites
  state(delta);
}

function end() {
  //All the code that should run at the end of the game
  gameScene.visible = false;
  gameOverScene.visible = true;
}
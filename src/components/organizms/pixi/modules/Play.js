import { contain, hitTestRectangle } from '../Utils'
import EndGame from './EndGame'
const Play = (explorer, blobs, treasure, door, healthBar, explorerHit, gameScene, gameOverScene, message, state) => {
  //All the game logic goes here
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
    state = EndGame(gameScene, gameOverScene)
    message.text = "You won!";
  }
  //Decide whether the game has been won or lost
  if (healthBar.outer.width < 0) {
    console.log('EndGame: ', EndGame);
    state = EndGame(gameScene, gameOverScene)
    message.text = "You lost!";
  }
  //Change the game `state` to `end` when the game is finsihed
}

export default Play
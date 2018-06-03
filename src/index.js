import {loadProgressHandler, createProject, getNewTexture, hitTestRectangle } from './Utils'
import ActionListener from './ActionListener'
import GetAwesomeSpriteGroup from './GetAwesomeSpriteGroup'
import GraphicPrimitives from './GraphicPrimitives'

//Create a Pixi Application
let app, texturesList, state, explorer, dungeon, gameScene, treasure

app = createProject()

document.body.appendChild(app.view)

PIXI.loader
  .add('../imgs/treasureHunter.json')
  .on('progress', loadProgressHandler)
  .load(setup)

function setup() {
  //Initialize the game sprites, set the game `state` to `play`
  //and start the 'gameLoop'
  texturesList = PIXI.loader.resources['../imgs/treasureHunter.json'].textures
  
  explorer = getNewTexture(texturesList, 'explorer.png')
  dungeon = getNewTexture(texturesList, 'dungeon.png')
  treasure = getNewTexture(texturesList, 'treasure.png')

  state = play

  //Make the game scene and add it to the stage
  gameScene = new PIXI.Container()
  app.stage.addChild(gameScene)

  explorer.vx = 0//velocity
  explorer.vy = 0//velocity
  explorer.x = 68
  explorer.y = 68
  treasure.x = 168
  treasure.y = 168

  gameScene.addChild(dungeon)
  gameScene.addChild(explorer)
  gameScene.addChild(treasure)

  ActionListener(explorer)
  app.ticker.add(() => gameLoop(explorer, play))//animation
}

function gameLoop(obj, play) {
  //Runs the current game `state` in a loop and renders the sprites
  play(obj, play)
}

function play(obj) {
  //All the game logic goes here
  obj.x += obj.vx
  obj.y += obj.vy

  if (hitTestRectangle(explorer, treasure)) {
    console.log('colision')
  }
}


function end() {
  //All the code that should run at the end of the game
}
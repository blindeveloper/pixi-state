import Utils from './Utils'
import Move from './Move'

//Create a Pixi Application
let app = Utils.createProject()
document.body.appendChild(app.view)

PIXI.loader
  .add('../imgs/treasureHunter.json')
  .on('progress', Utils.loadProgressHandler)
  .load(setup)

function setup() {
  let id = PIXI.loader.resources['../imgs/treasureHunter.json'].textures
  let explorer = new PIXI.Sprite(id['explorer.png'])
  let dungeon = new PIXI.Sprite(id['dungeon.png'])

  //Make the game scene and add it to the stage
  let gameScene = new PIXI.Container();
  app.stage.addChild(gameScene);

  explorer.vx = 0//velocity
  explorer.vy = 0//velocity
  explorer.x = 68;
  explorer.y = 68;

  gameScene.addChild(dungeon)
  gameScene.addChild(explorer)

  Move(explorer)
  app.ticker.add(() => Utils.gameLoop(explorer))//animation
}
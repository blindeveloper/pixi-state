import Utils from './Utils'
import Move from './Move'

//Create a Pixi Application
let app = Utils.createProject()
document.body.appendChild(app.view)

PIXI.loader
  .add('../imgs/spritesheet.json')
  .on('progress', Utils.loadProgressHandler)
  .load(setup)

function setup() {
  let id = PIXI.loader.resources['../imgs/spritesheet.json'].textures
  let player = new PIXI.Sprite(id['1'])
  player.vx = 0//velocity
  player.vy = 0//velocity
  app.stage.addChild(player)
  Move(player)
  app.ticker.add(() => Utils.gameLoop(player))//animation
}
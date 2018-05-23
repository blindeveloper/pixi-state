//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

//Create a Pixi Application
let app = new Application({ 
    width: 256, 
    height: 256,
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
loader
  .add("../imgs/spritesheet.json")
  .on('progress', loadProgressHandler)
  // .load(basicSetup)
  .load(testureAtlasSetup)

function testureAtlasSetup() {
  let id = PIXI.loader.resources["../imgs/spritesheet.json"].textures;
  let player = new Sprite(id['1']);
  player.position.set(60, 60)
  player.vx = 0;
  player.vy = 0;
  app.stage.addChild(player);
  app.ticker.add(() => gameLoop(player))//animation


  for (let i = 0, j = 0; i < 300; i+=30) {
    let sprite = new Sprite(id['0']);
    sprite.position.set(i, j)//move sprite
    app.stage.addChild(sprite);
  }  
}

function gameLoop(obj){
  //Update the cat's velocity
  obj.vx = 1;
  obj.vy = 1;

  //Apply the velocity values to the obj's 
  //position to make it move
  obj.x += obj.vx;
  obj.y += obj.vy;
}

//This `basicSetup` function will run when the image has loaded
function basicSetup() {
  console.log('All files loaded');
  //Create the cat sprite
  let finn = new Sprite(resources['../imgs/finn.png'].texture)
  let tileset = TextureCache['../imgs/tileset_1.png'];
  let rocket = new Sprite(tileset);
  tileset.frame = new Rectangle(96, 64, 32, 32);
  rocket.x = 32;
  rocket.y = 32;
  //actions
  finn.pivot.set(32, 32)//init point for rotation
  finn.position.set(24, 34)//move sprite
  // finn.scale.set(0.5, 0.5)//scale sprite
  let grouth = 0
  setInterval(() => {
    finn.rotation = grouth;//rotate
    grouth+=0.1
  }, 24)
  //Add the finn to the stage
  app.stage.addChild(rocket, finn);
}

function loadProgressHandler (loader, resource) {
  console.log('loading: ' + resource.url); 
  console.log('progress: ' + loader.progress + '%'); 
}
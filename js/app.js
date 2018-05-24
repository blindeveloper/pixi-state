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
  
  let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);
  
  left.press = () => {
    player.vx = -5;
    player.vy = 0;
  };

  left.release = () => {
    if (!right.isDown && player.vy === 0) {
      player.vx = 0;
    }
  };
  //Right
  right.press = () => {
    player.vx = 5;
    player.vy = 0;
  };
  right.release = () => {
    if (!left.isDown && player.vy === 0) {
      player.vx = 0;
    }
  };

  up.press = () => {
    player.vy = -5;
    player.vx = 0;
  };
  up.release = () => {
    if (!down.isDown && player.vx === 0) {
      player.vy = 0;
    }
  };

  //Down
  down.press = () => {
    player.vy = 5;
    player.vx = 0;
  };
  down.release = () => {
    if (!up.isDown && player.vx === 0) {
      player.vy = 0;
    }
  };
  app.ticker.add(() => gameLoop(player))//animation
}

function gameLoop(obj){
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

function keyboard(keyCode) {
  let key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}
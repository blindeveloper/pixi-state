//Aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

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
  .add('../imgs/finn.png')
  .on("progress", loadProgressHandler)
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {
  console.log("All files loaded");
  //Create the cat sprite
  let finn = new Sprite(resources['../imgs/finn.png'].texture)
  //actions
  finn.pivot.set(32, 32)//init point for rotation
  finn.position.set(24, 34)//move sprite
  finn.scale.set(0.5, 0.5)//scale sprite
  let grouth = 0
  setInterval(() => {
    finn.rotation = grouth;//rotate
    grouth+=0.1
  }, 24)
  //Add the finn to the stage
  app.stage.addChild(finn);
}

function loadProgressHandler (loader, resource) {
  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url); 

  //Display the percentage of files currently loaded
  console.log("progress: " + loader.progress + "%"); 
}
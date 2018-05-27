const Utils = {
    loadProgressHandler: (loader, resource) => {
      console.log('loading: ' + resource.url); 
      console.log('progress: ' + loader.progress + '%'); 
    },
    keyboard: (keyCode) => {
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
    },
    gameLoop: (obj) => {
      obj.x += obj.vx;
      obj.y += obj.vy;
    },
    createProject: () => {
      return new PIXI.Application({ 
        width: 256, 
        height: 256,
        antialias: true, 
        transparent: false, 
        resolution: 1
      })
    }
  }

export default Utils
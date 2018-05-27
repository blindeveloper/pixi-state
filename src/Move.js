import Utils from './Utils'

const Move = (object) => {
  let left = Utils.keyboard(37),
      up = Utils.keyboard(38),
      right = Utils.keyboard(39),
      down = Utils.keyboard(40);
  
  left.press = () => {
    object.vx = -5;
    object.vy = 0;
  };

  left.release = () => {
    if (!right.isDown && object.vy === 0) {
      object.vx = 0;
    }
  };

  right.press = () => {
    object.vx = 5;
    object.vy = 0;
  };

  right.release = () => {
    if (!left.isDown && object.vy === 0) {
      object.vx = 0;
    }
  };

  up.press = () => {
    object.vy = -5;
    object.vx = 0;
  };

  up.release = () => {
    if (!down.isDown && object.vx === 0) {
      object.vy = 0;
    }
  };

  down.press = () => {
    object.vy = 5;
    object.vx = 0;
  };

  down.release = () => {
    if (!up.isDown && object.vx === 0) {
      object.vy = 0;
    }
  };
}

export default Move
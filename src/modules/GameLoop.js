const GameLoop = (state, delta) => {
  //Runs the current game `state` in a loop and renders the sprites
  state(delta);
}

export default GameLoop
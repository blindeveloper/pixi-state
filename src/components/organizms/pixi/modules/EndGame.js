const EndGame = (gameScene, gameOverScene) => {
  //All the code that should run at the end of the game
  gameScene.visible = false;
  gameOverScene.visible = true;
}

export default EndGame
import {loadProgressHandler, createProject } from './Utils'
import Setup from './modules/Setup'
import * as PIXI from 'pixi.js'
//Create a Pixi Application
const PixiApp = () => {
  let app = createProject()
  document.body.appendChild(app.view)

  PIXI.loader
      .add('./src/components/organizms/pixi/img/treasureHunter.json')
      .on('progress', loadProgressHandler)
      .load(() => Setup(app))
}

export default PixiApp
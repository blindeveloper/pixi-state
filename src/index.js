import {loadProgressHandler, createProject } from './Utils'
import Setup from './modules/Setup'
//Create a Pixi Application
let app = createProject()
document.body.appendChild(app.view)

PIXI.loader
    .add('../img/treasureHunter.json')
    .on('progress', loadProgressHandler)
    .load(() => Setup(app))
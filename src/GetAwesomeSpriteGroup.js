import { getNewTexture } from './Utils'
const GetAwesomeSpriteGroup = (texturesList) => {
  let awesomeSpriteGroup = new PIXI.Container()

  let treasure = getNewTexture(texturesList, 'treasure.png')
  let blob = getNewTexture(texturesList, 'blob.png')
  let door = getNewTexture(texturesList, 'door.png')

  blob.position.set(16, 16)
  door.position.set(32, 32)
  treasure.position.set(64, 64)

  awesomeSpriteGroup.addChild(blob)
  awesomeSpriteGroup.addChild(door)
  awesomeSpriteGroup.addChild(treasure)

  return awesomeSpriteGroup
}

export default GetAwesomeSpriteGroup
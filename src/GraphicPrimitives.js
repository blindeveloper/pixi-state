const GraphicPrimitives = {
  newRectangle: () => {
    let rectangle = new PIXI.Graphics()
    rectangle.lineStyle(4, 0xFF3300, 1)
    rectangle.beginFill(0x66CCFF)
    rectangle.drawRect(0, 0, 64, 64)
    rectangle.endFill()
    rectangle.x = 250
    rectangle.y = 250
    return rectangle
  }
}

export default GraphicPrimitives
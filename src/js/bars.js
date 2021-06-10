import controller from './controller'

const bars = {
  dimensions: { width: 20, height: 80 },
  lLocation: { x: 0, y: 0 },
  rLocation: { x: 0, y: 0 },
  speed: 5,
  init(ctx, canvasElt) {
    this.ctx = ctx
    this.canvasElt = canvasElt
    this.lLocation.x = this.dimensions.width * 2
    this.lLocation.y = this.canvasElt.height / 2

    this.rLocation.x = this.canvasElt.width - this.dimensions.width * 2
    this.rLocation.y = this.canvasElt.height / 2
  },

  drawLBars() {
    //Firsts
    this.ctx.beginPath()
    this.ctx.fillRect(
      -this.dimensions.width / 2,
      -this.dimensions.height / 2,
      this.dimensions.width,
      this.dimensions.height
    )
    this.ctx.closePath()
  },

  drawRBars() {
    //Second
    this.ctx.beginPath()
    this.ctx.fillRect(
      -this.dimensions.width / 2,
      -this.dimensions.height / 2,
      this.dimensions.width,
      this.dimensions.height
    )
    this.ctx.closePath()
  },

  checkKeys() {
    controller.activeKeys.forEach(key => {
      if (key === 'ArrowUp') {
        this.lLocation.y -= this.speed
        this.rLocation.y -= this.speed
      } else if (key === 'ArrowDown') {
        this.lLocation.y += this.speed
        this.rLocation.y += this.speed
      }
    })
  },
  checkPosition() {
    if (this.lLocation.y <= this.dimensions.height / 2) {
      this.lLocation.y = this.dimensions.height / 2
      this.rLocation.y = this.dimensions.height / 2
    }
    if (
      this.lLocation.y >=
      this.canvasElt.height - this.dimensions.height / 2
    ) {
      this.lLocation.y = this.canvasElt.height - this.dimensions.height / 2
      this.rLocation.y = this.canvasElt.height - this.dimensions.height / 2
    }
  },
  update() {
    this.checkKeys()
    this.checkPosition()

    this.ctx.save()
    this.ctx.translate(this.lLocation.x, this.lLocation.y)
    this.drawLBars()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.translate(this.rLocation.x, this.rLocation.y)
    this.drawRBars()
    this.ctx.restore()
  },
}
export default bars

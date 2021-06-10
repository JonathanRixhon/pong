import bars from './bars'
export default class Ball {
  constructor(ctx, canvas) {
    this.canvalElt = canvas
    this.ctx = ctx
    this.radius = 5
    this.out = false
    this.speed = { x: 5, y: 5 }
    this.location = {
      x: bars.lLocation.x + bars.dimensions.width + this.radius * 2,
      y: bars.lLocation.y,
    }
  }
  collisionDetector() {
    //walls
    if (
      this.location.y <= this.radius / 2 ||
      this.location.y >= this.canvalElt.height - this.radius / 2
    ) {
      this.speed.y *= -1
    }

    if (
      this.location.x <= this.radius / 2 ||
      this.location.x >= this.canvalElt.width - this.radius / 2
    ) {
      this.out = true
    }

    //bars
    if (
      this.location.y >= bars.lLocation.y - bars.dimensions.height / 2 &&
      this.location.y <= bars.lLocation.y + bars.dimensions.height / 2
    ) {
      if (
        this.location.x <=
        bars.lLocation.x + bars.dimensions.width / 2 + this.radius / 2
      ) {
        this.speed.x *= -1
      }
      if (this.location.x >= bars.rLocation.x - bars.dimensions.width / 2) {
        this.speed.x *= -1
      }
    }
  }
  update() {
    this.collisionDetector()

    this.location.y += this.speed.y
    this.location.x += this.speed.x

    this.draw()
  }

  draw() {
    this.ctx.save()
    this.ctx.translate(this.location.x, this.location.y)
    this.ctx.beginPath()
    this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI, true)
    this.ctx.fill()
    this.ctx.closePath()
    this.ctx.restore()
  }
}

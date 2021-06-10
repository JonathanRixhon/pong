import bars from './bars'
import controller from './controller'
import Ball from './Ball'

const pong = {
  ctx: null,
  canvas: null,

  init() {
    document.documentElement.classList.add('js-enabled')
    this.canvasElt = document.createElement('canvas')
    this.canvasElt.width = window.innerWidth / 2
    this.canvasElt.height = window.innerHeight / 2
    //
    document.body.insertAdjacentElement('afterbegin', this.canvasElt)
    document.body.removeChild(document.querySelector('h1'))
    //
    this.ctx = this.canvasElt.getContext('2d')
    this.ctx.fillStyle = 'white'

    bars.init(this.ctx, this.canvasElt)
    controller.init()
    this.ball = new Ball(this.ctx, this.canvasElt)
    //animate

    this.animate()
  },
  animate() {
    let requestId = window.requestAnimationFrame(() => {
      this.animate()
    })
    this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height)

    if (this.ball.out) {
      this.ball = new Ball(this.ctx, this.canvasElt)
    }

    this.ball.update()
    bars.update()
  },
}
pong.init()

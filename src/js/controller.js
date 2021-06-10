import bars from './bars'

const controller = {
  keys: ['ArrowDown', 'ArrowUp'],
  activeKeys: [],
  init() {
    window.addEventListener('keydown', e => {
      if (this.keys.includes(e.key) && !this.activeKeys.includes(e.key)) {
        this.activeKeys.push(e.key)
      }
    })
    window.addEventListener('keyup', e => {
      let index = this.activeKeys.indexOf(e.key)
      this.activeKeys.splice(index)
    })
  },
}
export default controller

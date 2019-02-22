import Sprite from '../base/sprite'
import Databus from '../runtime/databus'

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHY = window.innerHeight;
let databus = new Databus();

const BG_IMG_SRC = 'images/bg.jpg'
const BG_WIDTH = 512
const BG_HEIGHT = 512

export default class Background extends Sprite {
  /**
   * 绘制背景
   */
  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)

    this.top = 0

    this.render(ctx)
  }

  update() {
    this.top += databus.dac;

    if (this.top >= SCREEN_HEIGHY)
      this.top = 0
  }

  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      -SCREEN_HEIGHY + this.top,
      SCREEN_WIDTH,
      SCREEN_HEIGHY
    )

    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      this.top,
      SCREEN_WIDTH,
      SCREEN_HEIGHY
    )
  }

}   

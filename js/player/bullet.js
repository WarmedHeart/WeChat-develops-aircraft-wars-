import Databus from '../runtime/databus'
import Sprite from '../base/sprite'

let databus = new Databus();
const IMG_URL = "images/ball_p.png";
export default class Bullet extends Sprite {
  constructor() {
    super(IMG_URL, 20, 20);
    this.srcX = 95;
    this.srcY = 0;
    this.srcWidth = 90;
    this.srcHeight = 90;
    this.bulletStyle = false;
  }

  init(x, y, i) {
    this.x = x;
    this.y = y;
    this.i = i;
  }

  update() {
    // if (this.bulletStyle){
      // if (this.y >= 0) {
      //   this.y -= databus.bulletSpeed;
      // } else {
      //   databus.removeBullet(this);
      //  }
    // } else {
     // 角度
      if (this.i == 1)  //left
        this.x -= 2;
      if (this.i == 2)  //right
        this.x += 2;
      if (this.y >= 0) {
        this.y -= databus.bulletSpeed;
      } else {
        databus.removeBullet(this);
      }
    }
  //}
}
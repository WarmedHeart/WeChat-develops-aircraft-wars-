import Sprite from '../base/sprite'
import Bullet from '../player/bullet'
import Databus from '../runtime/databus'

let databus = new Databus();
const IMG_URL = 'images/tank_p.png'
//飞机大小
const PLANE_WIDTH = 60;
const PLANE_HEIGHT = 60;
//屏幕的宽高
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

export default class Plane extends Sprite {
  constructor() {
    super(IMG_URL);
    this.x = (SCREEN_WIDTH - PLANE_WIDTH) / 2;
    this.y = SCREEN_HEIGHT - 180;
    this.width = PLANE_WIDTH;
    this.height = PLANE_HEIGHT;
    this.srcX = 145;
    this.srcY = 124;
    this.srcWidth = 135;
    this.srcHeight = 130;
  }

  shoot() {
    let num = 0;
    for (let i = 0; i < databus.cannoNum; i++) {
      let bullet = new Bullet();
      let x = this.x + (this.width / 2) - (20 * databus.cannoNum) / 2 + i * 20;;
      let y = this.y - 10;
      num++;
      if(databus.cannoNum != 3) {
        bullet.init(x, y, 0);
      } else if (databus.cannoNum ==3){
        if(num % 3 == 1){
          bullet.init(x, y, 1);
        } else if(num % 3 ==2) {
          bullet.init(x, y, 0);
        } else if (num % 3 == 0) {
          bullet.init(x, y, 2);
        }
       } //else if (databus.cannoNum == 4){
      //   if (num % 3 == 1 && num / 3 == 0) {
      //     bullet.init(x, y, 1);
      //   } else if (num % 3 == 2 && num / 3 == 0) {
      //     bullet.init(x, y, 0);
      //   } else if (num % 3 == 0 && num / 3 == 0) {
      //     bullet.init(x, y, 0);
      //   } else if (num % 3 == 1 && num / 3 == 1) {
      //     bullet.init(x, y, 2);
      //   }
      // }
      // if (num <= 2) {
      //   bullet.init(x, y, 0);
      // } else if (num == 3) {
      //   bullet.init(x, y, 1);
      // } else if (num == 4) {
      //   bullet.init(x, y, 2);
      // }
      databus.bullets.push(bullet);
    }
  }
}
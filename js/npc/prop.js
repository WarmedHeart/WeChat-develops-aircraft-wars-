import Sprite from '../base/sprite'
import Databus from '../runtime/databus'

let databus = new Databus();
const style = [{ x: 0, y: 0, form: 1, img_url:'images/ball_buff6.png', status:false }, 
  { x: 1, y: 0, form: 2, img_url: 'images/ball_buff2.png', status: false },
  { x: 2, y: 0, form: 3, img_url: 'images/ball_buff5.png', status: false }, 
  { x: 3, y: 0, form: 4, img_url: 'images/ball_buff3.png', status: false }, 
  //{ x: 4, y: 0, form: 5, img_url: 'images/ball_buff3.png', status: false }
  ]
const WIDTH = window.innerWidth / 5;
let i = 0;
export default class Prop extends Sprite {

  constructor() {
    super('', WIDTH, 50);

    let rStyle = style[0];
    this.img.src = rStyle.img_url
    this.srcX = rStyle.x;
    this.srcY = rStyle.y;
    this.srcWidth = 130;
    this.srcHeight = 130;
    this.form = rStyle.form;
    this.status = rStyle.status;
  }
  init(x, y, sindex) {
    let tempStyle = style[sindex];
    this.srcX = tempStyle.x;
    this.srcY = tempStyle.y;
    this.form = tempStyle.form;
    this.img.src = tempStyle.img_url;
    this.status = tempStyle.status;
    this.x = x;
    this.y = y;
  }
  drawToCanvas(ctx) {
    super.drawToCanvas(ctx);
  }
  
  update() {
    if (this.y < window.innerHeight) {
      this.y += (databus.propSpeed *1.5);
    } else {
      //销毁道具
      databus.removeProp(this);
    }
  }

}
import Databus from '../runtime/databus'

const RESTARIMG_URL = 'images/replay_btn_down.png';
const REVIVEIMG_URL = 'images/rightawayreborn_btn.png';
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHY = window.innerHeight;

let instance;
let databus = new Databus();
export default class GameInfo {
  constructor() {
    if (!instance) {
      instance = this;  //将第一次访问时申请的空间给了instance
      this.restartBtn = {  //重新开始按钮
        x: 0,
        y: 0,
        width: 200,
        height: 60
      }
      this.reviveBtn = {
        x: 0,
        y: 0,
        width: 100,
        height: 50
      }
    }
    return instance;
  }
  //绘制重新开始
  drawRestartBtn(ctx) {
    let img = new Image();
    img.src = RESTARIMG_URL;
    let x = (SCREEN_WIDTH - this.restartBtn.width) / 2;
    let y = SCREEN_HEIGHY / 2;
    this.restartBtn.x = x;
    this.restartBtn.y = y;
    ctx.drawImage(img, x, y, this.restartBtn.width, this.restartBtn.height);
  }
  //绘制复活
  drawReviveBtn(ctx) {
    let img = new Image();
    img.src = REVIVEIMG_URL;
    let x = (SCREEN_WIDTH - this.reviveBtn.width) / 2;
    let y = SCREEN_HEIGHY / 2 + this.restartBtn.height * 1.1;
    this.reviveBtn.x = x;
    this.reviveBtn.y = y;
    ctx.drawImage(img, x, y, this.reviveBtn.width, this.reviveBtn.height);
  }
  //绘制分数
  drawRestartScore(ctx, x, y, sc = databus.score) {
    ctx.fillStyle = '#ffffff';
    ctx.font = "small-caps blod 20px Arial";
    let textWidth = ctx.measureText(sc).width;
    ctx.fillText("分数：" + sc, x, y);
  }
}
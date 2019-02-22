import Databus from '../runtime/databus'
import GameInfo from '../runtime/game_info'

let databus = new Databus();
let gameInfo = new GameInfo();

export default class Event {
  constructor() {
    this.fingerOnPlane = false;

    this.bindTouchStart();
    this.bindTouchMove();
    this.bindTouchEnd();
  }

  bindTouchStart() {
    canvas.addEventListener('touchstart', (e) => {
      let touch = e.touches[0];
      let x = touch.clientX;
      let y = touch.clientY;
      //检查是否触碰到飞机
      this.checkIsTouchPlane(x, y);
      //游戏结束--检查触碰重新开始--检查触碰立即复活
      if (databus.isGameOver) {
        let rs = this.checkRestartBtn(x, y);
        let rv = this.checkReviveBtn(x, y);
        if (rs) {
          databus.mainApp.restart();
        } else if (rv) {
          databus.isGameOver = false;
          databus.enermys = [];
        }
      }
    });
  }


  bindTouchMove() {
    canvas.addEventListener('touchmove', (e) => {
      if (!this.fingerOnPlane) {
        return;
      }
      let x = e.touches[0].clientX;
      let y = e.touches[0].clientY;
      let plane = databus.plane;
      if (x > 0 && x < (window.innerWidth - plane.width)) {
        plane.x = x;
      }
      if (y > 0 && y < (window.innerHeight - plane.height)) {
        plane.y = y;
      }
    })
  }


  bindTouchEnd() {
    canvas.addEventListener('touchend', (e) => {
      this.fingerOnPlane = false;
    })
  }

  /**
   * 是否碰触到飞机
   */
  checkIsTouchPlane(x, y) {
    let plane = databus.plane;
    let diff = 30;
    if (x > (plane.x - diff) && x < (plane.x + plane.width + diff) &&
      y > (plane.y - diff) && y < (plane.y + plane.height + diff)) {
      this.fingerOnPlane = true;
      // console.info("碰到飞机啦");
    }
  }
  /**
   * 检查是否触碰到重新开始
   */
  checkRestartBtn(x, y) {
    let restartBtn = gameInfo.restartBtn;
    let rbtnX = restartBtn.x;
    let rbtnY = restartBtn.y;
    let rbtnWidth = restartBtn.width;
    let rbtnHeight = restartBtn.height;

    console.info(restartBtn);
    if ((x > rbtnX) && x < (rbtnX + rbtnWidth) && y > rbtnY && y < (rbtnY + rbtnHeight)) {
      return true;
    }
    return false;
  }
  /**
   * 立即复活
   */
  checkReviveBtn(x, y) {
    let reviveBtn = gameInfo.reviveBtn;
    let rbtnX = reviveBtn.x;
    let rbtnY = reviveBtn.y;
    let rbtnWidth = reviveBtn.width;
    let rbtnHeigth = reviveBtn.height;
    if ((x > rbtnX) && x < (rbtnX + rbtnWidth) && y > rbtnY && y < (rbtnY + rbtnHeigth)) {
      return true;
    }
    return false;

  }
}
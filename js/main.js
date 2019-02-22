import Background from './runtime/background'
import Plane from './player/plane'
import Event from './libs/event'
import Databus from './runtime/databus'
import EnermyFactory from './npc/enermy_factory'
import GameInfo from './runtime/game_info'
import PropFactory from './npc/prop_factory'
import Music from './runtime/music'


let databus = new Databus();
let ctx = canvas.getContext('2d')
let ef = new EnermyFactory();
let gi = new GameInfo();
let dj = new PropFactory();
let mui=new Music;

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0
    this.restart()
  }

  restart() {
    databus.resetConfig();
    databus.mainApp = this;
    this.bg = new Background(ctx);
    databus.plane = new Plane();
    this.cancle = true;  //检测无敌的标志
    databus.setSpeed(8)

    this.bindLoop = this.loop.bind(this);
    let event = new Event();
    window.cancelAnimationFrame(this.aniId);
    this.aniId = window.requestAnimationFrame(this.bindLoop)
  }

  loop() {

    this.update();
    this.render();
    this.aniId = window.requestAnimationFrame(this.bindLoop)
  }

  //负责更新游戏中各个对象的位置参数
  update() {
    if(Databus.isGameOver){
      return;
    }
    if (!databus.isGameOver) {
      this.bg.update();
      databus.frame++;

      if (databus.frame % (20 - databus.shootSpeed) == 0) {
        databus.plane.shoot();
      }
      // 生成敌军
      if (databus.frame % databus.generateEnermySpeed == 0) {
        ef.generateEnermy();
      }
      //更新生成道具的坐标
      if (databus.frame % databus.generatePropSpeed == 0) {
        dj.generateProp();
      }

   
      databus.bullets.concat(databus.enermys,databus.props).forEach((item) => {
        item.update();
      })
      this.checkIsCollision();
    }
  }
  //负责渲染界面
  render() {
    if (databus.isGameOver) {
      let _this = this;
      setTimeout(function () {
        _this.render(ctx);
        gi.drawRestartBtn(ctx);
        gi.drawRestartScore(ctx, window.innerWidth / 2.65, window.innerHeight / 2);
        gi.drawReviveBtn(ctx);
      }, 1000)
      return;
    }
    //绘制背景
    this.bg.render(ctx);
    databus.bullets.concat(databus.enermys,databus.props).forEach((bullet) => {
      bullet.drawToCanvas(ctx);
    })

    databus.plane.drawToCanvas(ctx);
    //绘制分数
    gi.drawRestartScore(ctx, 20, 20);

  }

  checkIsCollision() {
    //子弹和敌人的碰撞检测
    databus.bullets.forEach((bullet) => {
      for (let i = 0; i < databus.enermys.length; i++) {
        let enermy = databus.enermys[i];
       
        if (enermy.visible && bullet.checkIsCollision(enermy)) {
          enermy.minusBlood();
          //子弹和敌机碰撞加分
          databus.score += databus.bulletPower; //得分加分
          databus.removeBullet(bullet);
          mui.playShoot()
        }
      }
    })
    //道具与飞机的碰撞检测
    databus.props.forEach((prop) => {
      this.lastTime = new Date().getSeconds();  //道具到时的标志
      //console.info(this.lastTime);
      //无敌10s取消
      if ((this.lastTime - this.startTime2) / 100000 && !this.cancle) {
        this.lastTime = new Date().getSeconds();  
        this.cancle = true;
        databus.dac = databus.dac / 2;
        databus.enermySpeed = databus.enermySpeed / 2;
        databus.generateEnermySpeed = databus.generateEnermySpeed *2;
      } else if ((this.lastTime - this.startTime1) / 1000000 && databus.cannoNum > 1 ) {
          this.lastTime = new Date().getSeconds();          
          //databus.cannoNum--;
      }
      for (let i = 0; i < databus.props.length; i++) {
        let prop = databus.props[i];
        if (prop.visible && prop.checkIsCollision(databus.plane)) {
          //两炮管
          if (databus.cannoNum < 5 && prop.form ==1) {
           
            mui.playProp()
            //prop.status = true;
            this.startTime1 = new Date().getSeconds();  //道具到时的标志
            databus.cannoNum = 2;
            databus.setSpeed(8);
            console.info(databus.cannoNum)
            mui.playProp();
          }
          //无敌
          if(prop.form == 2) {
            mui.playProp()
            this.startTime2 = new Date().getSeconds();  //道具到时的标志1
            this.cancle = false;
            databus.dac = databus.dac * 2;
            databus.enermySpeed = databus.enermySpeed * 2;
            databus.generateEnermySpeed = databus.generateEnermySpeed / 2;
            mui.playProp();
          }
          //散弹
          if (databus.cannoNum < 5 && prop.form == 3) {
            mui.playProp()
            this.startTime3 = new Date().getSeconds();  //道具到时的标志1
            databus.cannoNum = 3;
            databus.setSpeed(8);
            mui.playProp();
          }
          //四管
          if (databus.cannoNum < 5 && prop.form == 4) {
            mui.playProp()
            this.startTime4 = new Date().getSeconds();  //道具到时的标志1
            databus.cannoNum = 4;
            databus.setSpeed(15);
            mui.playProp();
          }
          databus.removeProp(prop);
        }
      }
    })
  if(this.cancle){
    //飞机碰撞
    databus.enermys.forEach((enermy) => {
      if (enermy.visible && enermy.checkIsCollision(databus.plane)) {
        databus.isGameOver = true;
        mui.playExplosion()
      }
    })
  }
  }
}
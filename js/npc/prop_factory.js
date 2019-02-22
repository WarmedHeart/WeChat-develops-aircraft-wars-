import Prop from './prop'
import Strategy1 from './strategy1'
import Databus from '../runtime/databus'
let databus = new Databus();
const ELE_WIDTH = window.innerWidth / 5;
const ELE_HEIGHT = 50;
let instance;
export default class PropFactory {
  constructor() {
    if (!instance) {
      instance = this;
      this.strategy1 = new Strategy1();
    }
    return instance;
  }
  generateProp() {
    let index = Math.floor(Math.random() * this.strategy1.st.length)
    let s = this.strategy1.st[index];

    this.getProp(s);
  }
  getProp(st) {
    let dis = st.distance ? st.distance : 1;
    databus.generatePropSpeed = dis * databus.propSpeed * 50;
    //血量范围
    let max = st.max ? st.max : 1;
    let min = st.min ? st.min : 1;
    let strategy1 = st.s;
    let sHeight = st.height * ELE_HEIGHT;//从最顶上出来 

    for (let i = 0; i < strategy1.length; i++) {
      let range = Math.floor(Math.random() * (max - min)) + min + 1 //向上取整
      let sindex = 0;
      if (range > 4) {
        sindex = 3;
      } else if (range > 3) {
        sindex = 2;
      }
      else if (range > 2) {
        sindex = 1;
      }

      let celue = strategy1[i];
      let e = new Prop();
      let x = celue.x * ELE_WIDTH;
      let y = celue.y * ELE_HEIGHT + 11;

      e.init(x, y, sindex);
      databus.props.push(e);
    }
  }
}
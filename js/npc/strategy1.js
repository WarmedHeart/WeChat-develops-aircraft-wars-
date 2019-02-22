const ENERMY_HEIGHT = 50;
export default class Strategy1 {
  constructor() {
    let s1 = {
      height: 3,
      s: [{ x: 1, y: 0 }],
      distance: 3,//距离上一个元素的距离
      min: 1,//敌人的最小血量是子弹威力的倍数
      max: 5//敌人的最大血量倍数
    }

    let s2 = {
      height: 3,
      s: [{ x: 3, y: 0 }],
      distance: 3,//距离上一个元素的距离
      min: 1,//敌人的最小血量是子弹威力的倍数
      max: 5//敌人的最大血量倍数
    }
    let s3 = {
      height: 3,
      s: [{ x: 2, y: 0 }],
      distance: 3,//距离上一个元素的距离
      min: 1,//敌人的最小血量是子弹威力的倍数
      max: 5//敌人的最大血量倍数
    }

    this.st = []
    this.st.push(s1);
    this.st.push(s2);
    this.st.push(s3);

  }
}
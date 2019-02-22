const ENERMY_HEIGHT = 50;
export default class Strategy {
  constructor() {
    //策略1 十字
    let s1 = {
      height: 3,
      s: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
      distance: 2,//距离上一个元素的距离
      min: 1,//敌人的最小血量是子弹威力的倍数
      max: 3//敌人的最大血量倍数
    }
    //斜线
    let s2 = {
      height: 3,
      s: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
      distance: 1,//距离上一个元素的距离
      min: 1,//敌人的最小血量是子弹威力的倍数
      max: 2//敌人的最大血量倍数
    }
    //不规则
    let s3 = {
      height: 3,
      s: [{ x: 3, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 2 }],
      distance: 2,//距离上一个元素的距离
      min: 1,//敌人的最小血量是子弹威力的倍数
      max: 2//敌人的最大血量倍数
    }
    let s4 = {
      height: 4,
      s: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }],
      distance: 1,
      min: 2,
      max: 3
    }
        let s5 = {
      height: 3,
      s: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4},{ x: 5, y: 5 }],
      distance: 2,
      min: 1,
      max: 2
    }
    let s6 = {
      height: 3,
      s: [{ x: 0, y: 5}, { x: 1, y: 4 }, { x: 2, y: 3 }, { x: 3, y: 2 }, { x: 4, y: 1 }, { x: 5, y: 0 }],
      distance: 3,
      min: 1,
      max: 2
    }
    let s7 = {
      height: 3,
      s: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 },{ x: 0, y: 5 }, { x: 1, y: 4 }, { x: 2, y: 3 }, { x: 3, y: 2 }, { x: 4, y: 1 }, { x: 5, y: 0 }],
      distance: 3,
      min: 2,
      max: 3
    }
    let s8 = {
      height: 3,
      s: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 },
      {x : 1,y : 0},{x : 2,y : 1},{x : 3,y : 2},{x: 4,y : 3},{x : 5,y : 4}],
      distance: 3,
      min: 1,
      max: 2
    }


    this.st = []
    this.st.push(s1);
    this.st.push(s2);
    this.st.push(s3);
    this.st.push(s4);
    this.st.push(s5);
    this.st.push(s6);
    this.st.push(s7);
    this.st.push(s8);
  }
}
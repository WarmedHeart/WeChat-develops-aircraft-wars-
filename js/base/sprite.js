export default class Sprite {
  constructor(img_url = '', width = 0, height = 0, x = 0, y = 0, srcX = 0, srcY = 0, srcWidth = 0, srcHeight = 0) {
    this.img = new Image();
    this.img.src = img_url;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcWidth = srcWidth;
    this.srcHeight = srcHeight;
    this.visible = true;
  }

  drawToCanvas(ctx) {
    if (!this.visible) {
      return;
    }
    ctx.drawImage(
      this.img,
      this.srcX,
      this.srcY,
      this.srcWidth,
      this.srcHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  /**
   * 碰撞检测
   */
  checkIsCollision(sp) {

    let p1Width = this.width / 2;
    let p1Height = this.height / 2;
    let p1 = { x: this.x + p1Width, y: this.y + p1Height };

    let p2Width = sp.width / 2;
    let p2Height = sp.height / 2;
    let p2 = { x: sp.x + p2Width, y: sp.y + p2Height };

    if (Math.abs(p1.x - p2.x) < (p1Width + p2Width)
      && Math.abs(p1.y - p2.y) < (p1Height + p2Height)) {
      return true;
    }
    return false;
  }
}
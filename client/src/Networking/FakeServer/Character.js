export default class Character {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.health = null;
  }

  init(data) {
    this.x = data.x;
    this.y = data.y;
    this.health = data.health;
  }

  update(time, deltaTime) {

  }
}
import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type, health, level, attack = 100, defence, stoned = false, distance = 2) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
    this.stoned = stoned;
    this.distance = distance;
  }

  set distance(value) {
    this.distanceVal = value;
  }

  get distance() {
    return this.distanceVal;
  }

  set stoned(value) {
    this.stonedVal = value;
  }

  get stoned() {
    return this.stonedVal;
  }

  set attack(value) {
    this.attackVal = value;
  }

  get attack() {
    let attack = this.attackVal - (this.distanceVal - 1) * 10;
    if (this.stoned) {
      attack = Math.round(Math.abs(attack - Math.log2(this.distance) * 5));
    }
    return attack;
  }
}

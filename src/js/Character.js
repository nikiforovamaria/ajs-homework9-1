export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Длина имени должна быть минимум 2 символа и максимум 10 символов');
    }
    if (this.type !== 'Bowman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Тип должен быть один из перечисленных вариантов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }
}

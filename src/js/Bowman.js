import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, 'Bowman', health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name, type, health, level, attack, defence, stoned, distance) {
    super(name, 'Daemon', health, level, attack, defence, stoned, distance);
  }
}

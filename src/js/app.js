import Daemon from './Daemon';

console.log('worked');

const daemon = new Daemon('Luke');
daemon.attack = 100;
daemon.distance = 2;
daemon.stoned = true;

console.log(daemon.attack);

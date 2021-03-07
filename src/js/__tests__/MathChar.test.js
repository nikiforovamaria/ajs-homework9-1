import MathChar from '../MathChar';

test('1 - should return attack value', () => {
  const deamon = new MathChar('Mike', 'Daemon');
  const result = 90;
  expect(deamon.attack).toBe(result);
});

test('2 - should return attack value', () => {
  const deamon = new MathChar('Mike', 'Daemon');
  deamon.stoned = true;
  const result = 85;
  expect(deamon.attack).toBe(result);
});

test('3 - should give an error about name length', () => {
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(() => {
    const daemon = new MathChar('M', 'Daemon');
    return daemon;
  }).toThrow(result);
});

test('4 - should give an error about type', () => {
  const result = 'Тип должен быть один из перечисленных вариантов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie';
  expect(() => {
    const daemon = new MathChar('Mike', 'Daemonn');
    return daemon;
  }).toThrow(result);
});

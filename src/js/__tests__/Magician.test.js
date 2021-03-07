import Magician from '../Magician';

test('1 - should return attack value', () => {
  const magician = new Magician('Mike');
  const result = 90;
  expect(magician.attack).toBe(result);
});

test('2 - should return attack value', () => {
  const magician = new Magician('Mike');
  magician.stoned = true;
  const result = 85;
  expect(magician.attack).toBe(result);
});

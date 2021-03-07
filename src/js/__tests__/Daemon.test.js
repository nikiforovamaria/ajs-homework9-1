import Daemon from '../Daemon';

test('1 - should return attack value', () => {
  const daemon = new Daemon('Mike');
  const result = 90;
  expect(daemon.attack).toBe(result);
});

test('2 - should return attack value', () => {
  const daemon = new Daemon('Mike');
  daemon.stoned = true;
  const result = 85;
  expect(daemon.attack).toBe(result);
});

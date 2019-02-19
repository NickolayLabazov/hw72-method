import { Undead } from '../src/function';

test('Undead', () => {
  const expected = {
    type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
  };

  const received = new Undead();
  expect(received).toEqual(expected);
});

test('Работа метода levelUp', () => {
  const expected = {
    type: 'Undead', level: 2, health: 100, attack: 30, defence: 30,
  };
  const undead = new Undead();
  undead.levelUp();
  const received = undead;
  expect(received).toEqual(expected);
});

import Character from '../src/function';

test('Undead', () => {
  const expected = {
    type: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
  };

  const received = new Character('Undead');
  expect(received).toEqual(expected);
});

test('Bowman', () => {
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25,
  };

  const received = new Character('Bowman');
  expect(received).toEqual(expected);
});

test('Swordsman', () => {
  const expected = {
    type: 'Swordsman', level: 1, health: 100, attack: 40, defence: 10,
  };
  const received = new Character('Swordsman');
  expect(received).toEqual(expected);
});

test('Zombie', () => {
  const expected = {
    type: 'Zombie', level: 1, health: 100, attack: 40, defence: 10,
  };
  const received = new Character('Zombie');
  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const expected = {
    type: 'Daemon', level: 1, health: 100, attack: 10, defence: 40,
  };
  const received = new Character('Daemon');
  expect(received).toEqual(expected);
});

test('Magician', () => {
  const expected = {
    type: 'Magician', level: 1, health: 100, attack: 10, defence: 40,
  };
  const received = new Character('Magician');
  expect(received).toEqual(expected);
});

test('Невалидый ввод', () => {
  expect(() => {
    new Character('Кто-то левый');
  }).toThrow();
});

test('Magician', () => {
  const expected = {
    type: 'Magician', level: 2, health: 100, attack: 12, defence: 48,
  };
  const hero = new Character('Magician');
  hero.levelUp();
  const received = hero;
  expect(received).toEqual(expected);
});

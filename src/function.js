export default class Character {
  constructor(type) {
    this.type = type;
    this.level = 1;
    this.health = 100;
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    } else {
      throw ('неверный ввод персонажа');
    }
  }

  levelUp() {
    this.level += 1;
    this.health = 100;
    this.attack = this.attack * 1.2;
    this.defence = this.defence * 1.2;
  }
}

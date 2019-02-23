export class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
    }
  }
}

export class Undead extends Character {
  constructor() {
    super();
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

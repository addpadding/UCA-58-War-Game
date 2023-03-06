function Character(name, strenght, health) {
    this.name = name;
    this.strenght = strenght;
    this.health = health;
}

Character.prototype.attack = function (opponent) {
    opponent.health -= this.strenght;
    console.log(opponent.health);
};

Character.prototype.status = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Strenght: ${this.strenght}`);
    console.log(`Health: ${this.health}`);
}

Character.prototype.makeHealsh = function () {

    if (this.health < 100) {
        this.health += 10
    }

    if (this.health > 100) {
        this.health = 100
    }

}


let naruto = new Character("naruto", 10, 100);
let sasuke = new Character("sasuke", 5, 100);

sasuke.attack(naruto)

naruto.status()
naruto.makeHealsh()
naruto.status()
function Character(name, strenght, health) {
    this.name = name;
    this.strenght = strenght;
    this.health = health;
}

Character.prototype.attack = function (opponent) {
    opponent.health -= this.strenght;
    console.log(opponent.health);
};

let naruto = new Character("naruto", 10, 100);
let sasuke = new Character("sasuke", 5, 100);

sasuke.attack(naruto);

function Character(name, strenght, health) {
    this.name = name;
    this.strenght = strenght;
    this.health = health;


    this.attackBtn = document.querySelector(`#${this.name}-attack`)
    this.healthkBtn = document.querySelector(`#${this.name}-make-health`)
    this.progress = document.querySelector(`.${this.name}-health span`)
}

Character.prototype.attack = function (opponent) {
    opponent.health -= this.strenght;
    opponent.progress.style.width = `${opponent.health}%`
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
        this.progress.style.width = `${this.health}%`
    }

    if (this.health > 100) {
        this.health = 100
    }

}


let naruto = new Character("naruto", 10, 100);
let sasuke = new Character("sasuke", 5, 100);

console.log(sasuke)


naruto.attackBtn.addEventListener("click", function () {
    naruto.attack(sasuke)
})

sasuke.attackBtn.addEventListener("click", function () {
    sasuke.attack(naruto)
})




naruto.healthkBtn.addEventListener("click", function () {
    naruto.makeHealsh()
})

sasuke.healthkBtn.addEventListener("click", function () {
    sasuke.makeHealsh()
})
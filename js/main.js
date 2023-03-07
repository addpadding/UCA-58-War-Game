function Character(name, strenght, health) {
    this.name = name;
    this.strenght = strenght;
    this.health = health;
    this.element = new UIElements(this.name)
}

function UIElements(name) {
    this.attackBtn = document.querySelector(`#${name}-attack`)
    this.healthkBtn = document.querySelector(`#${name}-make-health`)
    this.alive = document.querySelector(`#${name}-alive`)
    this.progress = document.querySelector(`.${name}-health span`)
}

Character.prototype.attack = function (opponent) {
    if (opponent.health > 0) {
        opponent.health -= this.strenght;
        opponent.element.progress.style.width = `${opponent.health}%`
    } else {
        opponent.element.attackBtn.remove()
        opponent.element.healthkBtn.remove()
        opponent.element.alive.innerHTML = `${opponent.name} is died`
    }
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
        this.element.progress.style.width = `${this.health}%`
    }

    if (this.health > 100) {
        this.health = 100
    }

}


let naruto = new Character("naruto", 10, 100);
let sasuke = new Character("sasuke", 5, 100);

console.log(sasuke)

naruto.element.attackBtn.addEventListener("click", function () {
    naruto.attack(sasuke)
})

sasuke.element.attackBtn.addEventListener("click", function () {
    sasuke.attack(naruto)
})




naruto.element.healthkBtn.addEventListener("click", function () {
    naruto.makeHealsh()
})

sasuke.element.healthkBtn.addEventListener("click", function () {
    sasuke.makeHealsh()
})

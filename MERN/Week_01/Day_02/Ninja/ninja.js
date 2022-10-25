class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Hi, my name is " + this.name);
    }

    showStats() {
        console.log("Ninja Stats:");
        console.log("name: " + this.name);
        console.log("strength: " + this.strength);
        console.log("speed: " + this.speed);
        console.log("health: " + this.health);
    }

    drinkSake() {
        this.health += 10;
        console.log("*Drinks Sake* My health is now: " + this.health);
    }
}

const ninja1 = new Ninja("Ryu Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

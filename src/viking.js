// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength;
    };

    receiveDamage(damage) {
        this.health -= damage;
    };
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    };

    battleCry() {
        return "Odin Owns You All!";
    };
};

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength);
    };

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    };
};

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking (viking) {
        const newViking = new Viking(viking.name, viking.health, viking.strength);
        this.vikingArmy.push(newViking);
    };

    addSaxon (saxon) {
        const newSaxon = new Saxon(saxon.health, saxon.strength);
        this.saxonArmy.push(newSaxon);
    };

    vikingAttack () {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const outcome = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);
        this.saxonArmy = this.saxonArmy.filter(element => element.health > 0);
        return outcome;
    };

    saxonAttack () {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    
        const outcome = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack());
        this.vikingArmy = this.vikingArmy.filter(element => element.health > 0);
        return outcome;
    };

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        };
    };
};

let guerra = new War();

guerra.addViking({name:`Jorge`, health: 60, strength: 50})
guerra.addViking({name:`Jorge`, health: 60, strength: 50})
guerra.addViking({name:`Jorge`, health: 60, strength: 50})

guerra.addSaxon({health: 60, strength: 50})
guerra.addSaxon({health: 60, strength: 50})
guerra.addSaxon({health: 60, strength: 50})


while (guerra.showStatus() === `Vikings and Saxons are still in the thick of battle.`) {
    console.log(guerra.vikingArmy);
    console.log(guerra.saxonArmy);
    console.log(guerra.vikingAttack());
    console.log(guerra.showStatus());

    if(guerra.showStatus() === `Vikings and Saxons are still in the thick of battle.`) {
        console.log(guerra.vikingArmy);
        console.log(guerra.saxonArmy);
        console.log(guerra.saxonAttack());
        console.log(guerra.showStatus());
    };
};

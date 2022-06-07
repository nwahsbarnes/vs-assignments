const readline = require("readline-sync");

class NPC {
    constructor(name, health, hitChance, maxHit, ...drops) {
        this.name = name;
        this.health = health;
        this.hitChance = hitChance;
        this.maxHit = maxHit;
        this.drops = drops;
    }

    toString() {
        return `${this.name} health: ${this.health}`;
    }
}

const npcs = [
    new NPC("Zombie", 12, 0.15, 10, "Sword", "Bones"),
    new NPC("Chicken", 5, 0.05, 5, "5x Feathers", "Bones"),
    new NPC("Rat", 5, 0.1, 7, "Rat tail", "Bones"),
    new NPC("Skeleton", 20, 0.2, 15, "Skeleton head", "Bones"),
    new NPC("Moss Giant", 50, 0.3, 17, "Giant club", "Big bones")
];

class Player {
    constructor(name, health, hitChance, inventory) {
        this.name = name;
        this.health = health;
        this.hitChance = hitChance;
        this.inventory = inventory;
        this.maxHit = 20;
        this.inFight = false;
        this.enemy;
    }

    toString() {
        const inventoryString = (this.inventory.length === 0) ? "Empty" : this.inventory;
        return `Player: ${this.name}, health: ${this.health}, Inventory: ${inventoryString}`;
    }
}

function getRandomNPC() {
    return npcs[getRandomInt(0, npcs.length)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log("Welcome to Colossal RPG! Are you ready, adventurer?")

const name = readline.question("What shall I call you? ")
const player = new Player(name, 99, 0.6, []);

console.log(`Okay, ${player.name}. Let's head out.`)

// We assume the Player is adventuring if they're still alive.
while (player.health > 0) {

    if (player.inFight) {
        const attackSelect = getAttackSelect();
        if (attackSelect === "a") {
            // Check for player hit
            if (Math.random() < player.hitChance) {
                const damageDealt = takeDamage(player.enemy, player);
                console.log(`You attack and deal ${damageDealt} damage.`);
                // Check if enemy has died
                if (player.enemy.health <= 0) {
                    const drop = player.enemy.drops[getRandomInt(0, player.enemy.drops.length)];
                    console.log(`You have slain ${player.enemy.name} and received ${drop}.`);
                    const healthRestore = getRandomInt(2, 10);
                    player.health += healthRestore;
                    if (player.health > 99) {
                        player.health = 99;
                    }
                    console.log(`You eat some cake and heal for ${healthRestore}.`)
                    player.inventory.push(drop);
                    player.inFight = false;
                    delete player.enemy;
                    continue;
                } else {
                    console.log(player.enemy.toString());
                }
            } else {
                console.log("Your attack missed!");
            }
            // Check for enemy hit
            if (Math.random() < player.enemy.hitChance) {
                const damageTaken = takeDamage(player, player.enemy);
                console.log(`${player.enemy.name} hit you for ${damageTaken} damage.`)
            } else {
                console.log(`${player.enemy.name}'s attack missed.`);
            }
        } else if (attackSelect === "r") {
            const chanceToEscape = Math.random();
            if (chanceToEscape < 0.5) {
                const damageTaken = takeDamage(player, player.enemy);
                player.inFight = false;
                delete player.enemy;
                console.log(`You successfully escape, but took ${damageTaken} damage.`)
                continue;
            } else {
                const damageTaken = getRandomInt(1, player.enemy.maxHit);
                player.health -= damageTaken;
                console.log(`You failed to escape and took ${damageTaken} damage!`);
            }
        }
        continue;
    }

    // Ask user to select a menu option if we aren't in a fight.
    const response = getMenuSelect();

    if (response === "w") { // Walk
        const randomEnemyChance = Math.random();
        if (randomEnemyChance < 0.333) {
            player.inFight = true;
            player.enemy = getRandomNPC();
            console.log(`A wild ${player.enemy.name} has appeared!`);
        }
    } else if (response === "p" || response === "print") {
        console.log(player.toString());
    }
}

if (player.health <= 0) {
    console.log("Thanks for playing Colossal RPG. See you next time, adventurer.");
}

/* entity2 inflicts a random damage amount [1-maxHit] onto entity */
function takeDamage(entity, entity2) {
    const damageTaken = getRandomInt(1, entity2.maxHit);
    entity.health -= damageTaken;
    return damageTaken;
}

function getMenuSelect() {
    let response;
    do {
        response = readline.question("Select an option: 'w' for walk or 'p' or 'print' for character stats: ").toLowerCase();
    } while (!(response === "w" || response === "p" || response === "print"));
    return response;
}

function getAttackSelect() {
    let response;
    do {
        response = readline.question("Select an option: 'a' for attack or 'r' for run away: ").toLowerCase();
    } while (!(response === "a" || response === "r"));
    return response;
}
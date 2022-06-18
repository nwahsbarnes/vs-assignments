class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                break;
        }
    }
    gotPowerUp() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                break;
            case "Powered Up":
                this.hasStar = true;
                break;
        }
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total coins: ${this.totalCoins}`);
    }
}

const player = new Player();
player.setName("Mario");

for (let i = 0; i < 10; i++) {
    if (player.status === "Dead") {
        break;
    }
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        if (!player.hasStar) {
            player.gotHit();
        } else {
            console.log("Your star protected you!");
        }
    } else if (rand === 1) {
        player.gotPowerUp();
    } else if (rand === 2) {
        player.addCoin();
    }
    player.print();
    console.log();
}
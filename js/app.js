// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed  = speed;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for all computers.
        this.x += this.speed * dt;
        if (this.x >= 680) {
            this.x = -85;
        }
        if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
            player.x = 300;
            player.y = 500;
        };
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Now write your own player class
class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/cat-girl.png';
    }

    update (x, y) {
        if (this.y <= 0) {
            this.x = 300;
            this.y = 500;
            gameEnd();      
        }
    }
    // Draw the player on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    //to handel player move.
    handleInput(moves) {
        if (moves === 'up') {
            this.update(this.y -= 85);
        } else if (moves === 'down') {
            this.update(this.y += 85);
        } else if(moves === 'right') {
            this.update(this.x += 100);
        } else if(moves === 'left') {
            this.update(this.x -= 100);
        }
    }
}
//to apper id won if game ended.
function modal() {
    const modal = document.querySelector('#won')
    modal.classList.add('appear');    
}

// Game end function if player won.
function gameEnd() {
    modal();
    const playAgain = document.querySelector('.button');
    playAgain.addEventListener('click', function() {
        player.x = 300;
        player.y = 500;
    const modal = document.querySelector('#won');
            modal.classList.remove('appear');   
        });
        
}
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemyOne = new Enemy (0, 60, 600);
const enemyTwo = new Enemy (0, 145, 500);
const enemyThree = new Enemy (0, 230, 700);
const enemyFour = new Enemy (0, 310, 600);
const enemyFive = new Enemy (0,395, 900);

let allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive];
let player = new Player(300, 500);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

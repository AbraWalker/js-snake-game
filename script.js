//define html elements
const board = document.getElementById('game-board');

//define game variables
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = 'right';

/**
 * draw game map, snake and food
 */
function draw() {
    board.innerHTML = "";
    drawSnake();
    drawFood();
}

/** draw snake*/
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

/**
 * create snake or food cube (div)
 */
function createGameElement(tag, className) {
    //create any tag type
    const element = document.createElement(tag);
    //adds class name to newly created tag element
    element.className = className;
    return element;
}

/**
 * set the pos for food or snake
 */
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

/**
 * draw food
 */
function drawFood() {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

/**
 * load food in a random position
 * @returns
 */
function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

/**moving the snake
 */
function move() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'right':
            head.x++;
            break;
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
    }

    snake.unshift(head);
    snake.pop();
}

//test 
setInterval(() => {
    move(); //move first
    draw();
}, 200);
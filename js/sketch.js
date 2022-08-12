let mySnake, myFood, canvasSize = 600, 
    movement = 10, score = 0, foodDefinition = 13, 
    initialFrameRate = 20;

// Some insersions for the setup like framerate etc.
function setup(){
    createCanvas(canvasSize, canvasSize);

    mySnake = new Snake();
    myFood = new Food();
    myFood.create();

    frameRate(initialFrameRate);
}

// It's the loop(if(game)->gameloop)
function draw(){
    background(0);
    
    mySnake.move();
    mySnake.draw();

    if(mySnake.crash()){
        frameRate(0);
        fill(255, 0, 0);
        textAlign(CENTER);
        textSize(60);
        text("You lose... \nYour score is "+ score, canvasSize/2, canvasSize/2);
    }

    if (mySnake.capture(myFood.x, myFood.y)){
        mySnake.expand(myFood.x, myFood.y);
        myFood.create();
        score++;
        frameRate(initialFrameRate + score);
    }

    console.log("myFood: " + myFood.x, myFood.y);

    mySnake.moveQueue();


    myFood.draw();
}

function keyPressed(){
    if(keyCode == UP_ARROW && mySnake.direction != "down"){
        mySnake.direction = "up";
    }

    else if(keyCode == RIGHT_ARROW && mySnake.direction != "left"){
        mySnake.direction = "right";
    }

    else if(keyCode == DOWN_ARROW && mySnake.direction != "up"){
        mySnake.direction = "down";
    }

    else if(keyCode == LEFT_ARROW && mySnake.direction != "right"){
        mySnake.direction = "left";
    }
}
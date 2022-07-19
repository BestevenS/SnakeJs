function Food(){
    this.x;
    this.y;

    gridLines = canvasSize / movement;
    this.create = function(){
        this.x = Math.floor(Math.random() * gridLines) * movement;
        this.y = Math.floor(Math.random() * gridLines) * movement;
        while(this.x == 0 && this.y == canvasSize && this.y == 0 && this.x == canvasSize){
            this.x = Math.floor(Math.random() * gridLines) * movement;
            this.y = Math.floor(Math.random() * gridLines) * movement;
        }
    }

    this.draw = function(){
        fill(0, 255, 0);
        ellipse(this.x, this.y, foodDefinition, foodDefinition);
    }
}
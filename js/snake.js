function Snake(){
    let position = canvasSize/2;
    let definition = 13;
    
    this.x = position;
    this.y = position;

    this.queue = [];

    // 1 = up, 2 = right, 3 = down, 4 = left.
    this.direction = "static";
    
    this.move = function(){
        if(this.direction == "left"){
            this.x -= movement;
            if(this.x == 0){
                this.x = canvasSize;
            }
        }
        
        else if(this.direction == "right"){
            this.x += movement;
            if(this.x == canvasSize){
                this.x = 0;
            }
        }

        else if(this.direction == "up"){
            this.y -= movement;
            if(this.y == 0){
                this.y = canvasSize;
            }
        }
        
        else if(this.direction == "down"){
            this.y += movement;
            if(this.y == canvasSize){
                this.y = 0;
            }
        }
    }

    this.moveQueue = function(){
        this.queue.push({x: this.x, y: this.y});
        this.queue.shift();
    }

    this.expand = function(x, y){
        this.queue.push({x, y});
    }
    
    this.draw = function(){
        fill(255);
        ellipse(this.x, this.y, definition, definition);

        console.log(this.x, this.y);

        this.queue.forEach(function(element){
            ellipse(element.x, element.y, definition, definition);
        });
    }

    this.capture = function(fx, fy){
        if(dist(this.x, this.y, fx, fy) < 1){
            return true;
        }
    }

    this.crash = function(){
        for(i = 0; i < this.queue.length; i++){
            if(dist(this.x, this.y, this.queue[i].x, this.queue[i].y) < 1){
                return true;
            }
        }
    }
}
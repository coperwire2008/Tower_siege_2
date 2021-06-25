class Hexa {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 0.5, 
        };
  
      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png") 
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image,-50, -50, this.width, this.height);
      pop();
    }
  }
  
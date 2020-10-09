class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      stroke(0);
      strokeWeight(5);
      fill(rgb(189,66,69));
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

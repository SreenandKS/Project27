class Bob {
    constructor(x, y,radius) {
      var options = {
          
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Matter.Bodies.circle(x, y, radius,{ options,isStatic:true});
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      ellipseMode(CENTER);
      fill(255,144,85);
      ellipse(pos.x, pos.y, this.radius);
      
    }
  };
  
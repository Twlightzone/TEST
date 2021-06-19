class CannonBall {
  constructor(x, y) {
    var options = {
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);
    this.trag=[]

    this.image = loadImage("./assets/cannonball.png");
    
    World.add(world, this.body);
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }


  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
    if (this.body.velocity.x>0&&this.body.position>300) {
      var positions=[this.body.position.x,this.body.position.y]
      this.trag.push(positions)
    }
for (let i = 0; i < this.trag.length; i++) {
  image(this.image,this.trag[i][0],this.trag[i][1],5,5)

}
    }
  }


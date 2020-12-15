class Plinko {
    constructor(x, y) {
      var options = {
          isStatic:true
          
      }
      this.x=x;
		this.y=y;
		this.r=10;
		
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		World.add(world, this.body);

	}
	display()
	{

			var plinkopos=this.body.position;		
			var angle = this.body.angle;
            
			push()
			translate(plinkopos.x, plinkopos.y);
			rotate(angle)
			ellipse(0,0,this.r,this.r)
			ellipseMode(CENTER)
			strokeWeight(3);
			fill(255)
			pop()

	}
}
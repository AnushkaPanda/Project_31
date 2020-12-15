class Particle {
    constructor(x, y,r) {
      var options = {
          
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x=x;
		this.y=y;
		this.r=r;
		
		this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);


	}
	display()
	{

			var particlepos=this.body.position;		
			var angle = this.body.angle;

			push()
			translate(particlepos.x, particlepos.y);
			rotate(angle)
			fill(this.color)
            noStroke();
			ellipse(0,0,this.r,this.r)
			ellipseMode(RADIUS);
			pop()

	}
}

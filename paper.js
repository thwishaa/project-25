class paper{
    constructor (x,y,radius){
        var options ={
            isStatic: false,
            density: 1.2,
            friction : 0.5,
            restitution: 0.3
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius; 
        this.image = loadImage("PAPER.jpg")
        this.image.scale = 2;
        World.add(world,this.body);
9
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        imageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius);

        pop();
    }

    
}

class Particle{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 1,
            friction : 0
        }
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(random(0,255),random,random.random);
        ellipse(pos.x , pos.y , this.r , this.r);
    }
}
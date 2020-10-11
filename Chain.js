class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bird.body,
            bodyB: constLog.body,
            stiffness :0.04,
            legnth: 10
        }
    
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
       
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

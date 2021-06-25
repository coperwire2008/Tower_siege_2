class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:0.004
        }

    this.sling = Matter.Constraint.create(options)
    World.add(world,this.sling)
    }
    
    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA != null){
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
}
    }
 
    fly(){
        this.sling.bodyA = null;
    }


}
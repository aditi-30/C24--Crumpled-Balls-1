class dustbin{
    constructor(x,y,width,height)
    {
        var options= {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2,

        }
        this.x=x;
        this.y=y;
        this.width=width; 
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World .add(world,this.body)
}

display()
{
    var dustbinpos= this.body.position;
     push()
     translate(dustbinpos.x,dustbinpos.y)
     rectMode(CENTER)
     strokeWeight(3)
     fill("lightblue")
     rect(0,0,this.width,this.height)
     pop()
}
}

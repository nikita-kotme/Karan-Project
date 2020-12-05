class boyy{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.1,
            friction:1,
            density:1.2
        }
        
        this.x=x
        this.y=y
        this.image=loadImage("boy.png");
        
        //this.body=Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.image);
        
    }
    display(){
        
        
        
        //circle(pos.x,pos.y,this.radius,)
        imageMode(CENTER)
        
        image(this.image,282,600,300,300)
        
        
    }

}
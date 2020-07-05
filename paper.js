class Paper{
    contructor(x,y,r){
        var options={
           // isStatic:true,
            restitution:0.3,
            density:1.2,
            friction:0.5
    }
    this.body = Bodies.circle(this.x,this.y,this.r/2, options);
    this.r=r;
    this.x=x;
    this.y=y;


     World.add(world, this.body);
  }
  display(){
     var paperPos=this.body.position
     push();
    translate(paperPos.x,paperPos.y);
    fill("purple")
    ellipseMode(CENTER);
    ellipse( 0, 0, this.r, this.r);
    pop();
  }
}







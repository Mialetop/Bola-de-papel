class Paper{
constructor(x,y, width, height){
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0,
        'density':1.2
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
}
display(){
    ellipse(pos.x,pos.y,this.width,this.height);
    image(this.image, 0, 0, this.width, this.height);
}
};
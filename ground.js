class ground{
	constructor(){
		var options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(750, 550, 1200,20, options);
 		World.add(world, this.body);
	}
	display(){
        var groundPos=this.body.position;
      fill("yellow")
		rect(groundPos.x,groundPos.y,1500, 20);		
	}
}
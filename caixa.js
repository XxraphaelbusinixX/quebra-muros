class Caixa{
constructor(x,y){
var opcoes = {
    restitution:0.8,
    friction:1.0,
    density:0.04
}
    this.caixa = Bodies.rectangle(x, y, 50, 50,opcoes)
    World.add(world,this.caixa)
}

desenha(){
push()
translate(this.caixa.position.x,this.caixa.position.y)
rotate(this.caixa.angle)
stroke("green")
strokeWeight(4)
fill("blue")
rect(0,0 ,50, 50)
pop()
}

}




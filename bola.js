class Bola{
constructor(x,y){
var opcoes = {
density:1,
frictionAir:0.005
}

this.bola = Bodies.circle(x, y, 80, opcoes)
World.add(world,this.bola)
}

desenha(){
var angulo = this.bola.angle

push()
translate(this.bola.position.x,this.bola.position.y)
rotate(angulo)
ellipse(0,0,80,80)
pop()

}
}
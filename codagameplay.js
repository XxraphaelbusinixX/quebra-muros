class Corda{
constructor(corpoA,pontoB){
var opcoes = {
bodyA: corpoA,
pointB: pontoB,
stiffness:1.2,
length:250,
}

this.pontoB = pontoB
this.corda = Constraint.create(opcoes)
World.add(world,this.corda)
}

desenha(){
push()
stroke(48,22,8)
strokeWeight(3)
line(this.corda.bodyA.position.x,this.corda.bodyA.position.y,this.pontoB.x,this.pontoB.y)
pop()
}
}
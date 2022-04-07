const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chao
var caixa1,caixa2,caixa3,caixa4,caixa5,caixa6,caixa7,caixa8,caixa9,caixa10,caixa11,caixa12,caixa13,caixa14,caixa15,caixa16,caixa17,caixa18,caixa19,caixa20
var bola
var corda

var engine, world;

function setup() {
  createCanvas(1420, 640);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER)
  ellipseMode(RADIUS)

 chao = new Chao(710,630,1420,20)
caixa1 = new Caixa(900, 100)
caixa2 = new Caixa(900, 100)
caixa3 = new Caixa(900, 100)
caixa4 = new Caixa(900, 100)
caixa5 = new Caixa(900, 100)
caixa6 = new Caixa(900, 100)
caixa7 = new Caixa(800, 100)
caixa8 = new Caixa(800, 100)
caixa9 = new Caixa(800, 100)
caixa10 = new Caixa(800, 100)
caixa11 = new Caixa(800, 100)
caixa12 = new Caixa(800, 100)
caixa13 = new Caixa(700, 100)
caixa14 = new Caixa(700, 100)
caixa15 = new Caixa(700, 100)
caixa16 = new Caixa(700, 100)
caixa17 = new Caixa(700, 100)
caixa18 = new Caixa(700, 100)
caixa19 = new Caixa(700, 100)
caixa20 = new Caixa(700, 100)
bola = new Bola(200,400)
corda = new Corda(bola.bola,{x:500,y:50})

}

function draw() {
  background(180);

  Engine.update(engine);

chao.desenha();
caixa1.desenha()
caixa2.desenha();
caixa3.desenha();
caixa4.desenha();
caixa5.desenha();
caixa6.desenha();
caixa7.desenha();
caixa8.desenha();
caixa9.desenha();
caixa10.desenha();
caixa11.desenha();
caixa12.desenha();
caixa13.desenha();
caixa14.desenha();
caixa15.desenha();
caixa16.desenha();
caixa17.desenha();
caixa18.desenha();
caixa19.desenha();
caixa20.desenha();
bola.desenha();
corda.desenha();

}

function mouseDragged(){
Body.setPosition(bola.bola,{x:mouseX,y:mouseY})
}


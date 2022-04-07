class Chao{
constructor(x, y, largura, altura){

    var opcoes = {
        isStatic:true
      }
    
      this.chao = Bodies.rectangle(x, y, largura, altura, opcoes);
      this.largura = largura
      this.altura = altura
      World.add(world,this.chao)
}
desenha(){
    fill("brown")
    rect(this.chao.position.x,this.chao.position.y,this.largura,this.altura)

}

}
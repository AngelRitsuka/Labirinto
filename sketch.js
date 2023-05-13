/*
                          Crie um jogo de Labirinto
          T A R E F A S para o desenvolvimento
          1.Defina o plano de fundo com uma cor.

          2. Projete seu próprio labirinto criando 22 paredes.

          3. Crie bordas para que o seu personagem não saia da tela.

          4. Crie um  protagonista e coloque-o no ponto inicial do labirinto.
              ● O ponto de partida pode ser em qualquer canto do labirinto.

          5. Crie um objetivo(prêmio para seu protag alcançar) 
          e coloque-o no ponto final do labirinto.
              ● Coloque o objetivo no outro canto do labirinto.

          6. Use os eventos de pressionamento de tecla para mover o personagem
          entre as paredes do labirinto.

          7. Quando o personagem alcançar o prêmio, coloque um texto pro jogador.
              ● Pode ser: "Você Venceu" no meio da tela.
*/ 



//crie as variaveis
var parede1;





//carregar imagens, animações, sons e dados
function preload()
{
  

}

//configurações (coisas que precisam ser criadas para o seu game)
function setup() 
{
  //criando uma tela
  createCanvas(1275,640);

  //crie seus sprites aqui e coloque suas propriedades como fiz nesta primeira parede
  parede1 = createSprite(50,70,500,5);
  parede1.shapeColor = "black";




}

function draw() 
{
  //que cor será o fundo?
  background("lightblue");
 
    

  /*
  crie um controle com as setas do seu teclado
  usando a programação condicional como nesse
  exemplo:

  if (keyDown("UP_ARROW")) 
  {
    
    nome_do_seu_sprite.velocityX = 0;
    nome_do_seu_sprite.velocityY = -4;

  }
  */

  //criar bordas na tela (essas são as bordas do canto, mas com este comando elas podem colidir :)
  createEdgeSprites();

  //o comando abaixo que esta em comentário "bounceOff"
  //faz o sprite quicar nas "edges", ou seja nas bordas da tela
  //nome_do_seu_sprite.bounceOff(edges);



  //comando para aparecer todos os sprites:
  drawSprites();
}

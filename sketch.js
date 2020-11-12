var gameState = "start"

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var score=0;
var turn=0;
  
var ground;
var particle;
  

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
  text("SCORE: "+score,20,30);

  fill("gold");
  text("<100>",413,750);
  text("<100>",333,750);
  text("*500*",257,750);
  text("<100>",499,750);
  text("*500*",94,750);
  text("&200&",652,750);
  text("*500*",175,750);
  text("&200&",573,750);
  text("*500*",15,750);
  text("&200&",736,750);

  Engine.update(engine);
  if(gameState==="end"){
    fill("red")
    textSize(20)
    text("GAMEOVER",400,400)
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }




//SCORE-PROBLEM
if(particle!=null){
       particle.display();
        
if (particle.body.position.y>760){
   if (particle.body.position.x < 300) {
        score=score+500;      
          particle=null;
              if ( turn>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301){
                    score = score + 100;
                    particle=null;
                    if ( turn>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601){
                    score = score + 200;
                    particle=null;
                    if ( turn>= 5)  gameState ="end";

              }      
              
        }
  

      }
      for (var k = 0; k < divisions.length; k++) {
     
        divisions[k].display();
      }
    }
//SCORE-PROBLEM



//MOUSE PRESSED-PROBLEM
function mousePressed(){
  if(gameState!=="end"){
    turn++
    particle=new Particle(mouseX,10,10,10);
  }
}
//MOUSE PRESSED-PROBLEM
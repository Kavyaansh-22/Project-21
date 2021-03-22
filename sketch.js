var canvas;
var music;
var surface1,surface2,surface3,surface4,box;




function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(170,500,130,20);
    surface1.shapeColor = "red";

    surface2 = createSprite (320,500,130,20);
    surface2.shapeColor = "blue";

    surface3 = createSprite (460,500,130,20);
    surface3.shapeColor = "black";

    surface4 = createSprite (610,500,130,20);
    surface4.shapeColor = "pink";

    box = createSprite(random(20,750),20,20,20);
    box.velocityX = -4;
    box.velocityY = 4;
    box.shapeColor = "white";
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();

    box.bounceOff(edges);
 
    
   


    if(surface1.isTouching(box) &&  box.bounceOff(surface1)){

         box.shapeColor = "red";

    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){

        box.shapeColor = surface2.shapeColor;

  }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){

    box.shapeColor = surface3.shapeColor;


   }

   if(surface4.isTouching(box) && box.bounceOff(surface4)){
       box.shapeColor = surface4.shapeColor;
   }



    //add condition to check if box touching surface and make it box


    drawSprites();
}

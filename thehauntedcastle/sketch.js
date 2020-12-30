function setup() {
  createCanvas(850, 600);
}

function draw() {
  background(21, 17, 75);

    //Sun/Moon
    noStroke();
    fill(208, 211, 212),
    ellipse(800,30,300,300);
    fill(127, 140, 141);
     ellipse(800,10,50,50);
    stroke(0);
    //Grass
    fill(21, 133, 21);
    rect(0, 500, 900, 100);
    fill(54,54,54);
    triangle(40, 105, 100, 10, 170, 105);
    rect(40, 105, 130, 400);
    rect(170 ,140,500,365);
    rect(670, 105, 130, 400);
     triangle(670, 105, 730, 10, 800, 105);
    rect(220, 110, 30, 30);
    rect(290, 110, 30, 30);
    rect(360, 110, 30, 30);
    rect(430, 110, 30, 30);
    rect(500, 110, 30, 30);
    rect(570, 110, 30, 30);
    //Windows
    fill(200, 229, 247);
rect(250, 200, 60, 60);
    rect(550, 300, 60, 60);
    rect(690, 370, 90, 60);
    
    fill(0);
        rect(250, 200, 60, 60);
    rect(550, 300, 60, 60);
    rect(690, 370, 90, 60);
    
    
    //Door 
    fill(66, 43, 1);
   arc(400, 505, 150,350 ,PI,degrees(0))
   fill(0);
   ellipse(400,440,20,40)
       
    //Stars
    fill(255,255,255,130)
    ellipse(200,50,10,10)
    ellipse(25,10,10,10,10)
    ellipse(350,125,10,10)
    ellipse(35,200,10,10)
    ellipse(460,50,10,10)
    ellipse(320,15,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
    ellipse(200,50,10,10)
}
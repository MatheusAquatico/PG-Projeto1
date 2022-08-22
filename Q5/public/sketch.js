
 var p = createP("oi");

function setup() {
  p = createP("oi");
  createCanvas(windowWidth - 15, windowHeight - 20, WEBGL);
  frameRate(60)
  
  
}

function draw() {
    const v =1.5
    const r=100
    const t = millis()/1000;
    p.html(t);
    background('white');
    line(-300,0,0,300,0,0);
    line(0,-300,0,0,300,0);
    line(0,0,-300,0,0,300);
    
    const theta= PI/3;
    const theta2= PI/2;
    point(0, 0, 0);//origem
    
    //rotateX(theta);
    push();
    
    circle(100, -100, 200);
    square(0, -200, 200);
    strokeWeight(3);//tamanho do contorno
    stroke(255,0,0);
    point(200, -100, 0);//borda
    stroke(255,0,0);
    point(100, -100, 0);//centro 
    
    
    //rotateX(theta);
    

    

   
    pop();
    
    
    
    push();
    
    
    
    //translate(100, -100, 0)
    applyMatrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        100, -100, 0, 1
    );
    //rotateZ(v*t);
    applyMatrix(
        cos(v*t), -sin(v*t), 0, 0,
        sin(v*t), cos(v*t), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
    //translate(53, -53, 0)
    applyMatrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        53, -53, 0, 1
    );
    //rotateZ((v*t)*4);
    applyMatrix(
        cos((v*t)*4), sin((v*t)*4), 0, 0,
        -sin((v*t)*4), cos((v*t)*4), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
    circle(0,0, 50);
    strokeWeight(10);//tamanho do contorno
    stroke(255,0,0);
    point(25,0)
    pop();
    
    orbitControl();
    
    
    
}
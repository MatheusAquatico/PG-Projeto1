


function setup() {
  createCanvas(windowWidth - 15, windowHeight - 20, WEBGL);
  frameRate(60)
  
  
}

function draw() {
    const v =1
    const r=100
    const t = millis()/1000;
    background('white');
    line(-300,0,0,300,0,0);
    line(0,-300,0,0,300,0);
    line(0,0,-300,0,0,300);
    
    const theta= PI/3;
    const theta2= PI/2;
    point(0, 0, 0);//origem
    point(100, -50, -87);//centro 
    point(200, -50, -87);//borda
    //rotateX(theta);
    push();
    applyMatrix(
        1, 0, 0, 0,
        0, cos(theta), sin(theta), 0,
        0, -sin(theta), cos(theta), 0,
        0, 0, 0, 1
    );
    circle(100, -100, 200);
    square(0, -200, 200);
    strokeWeight(3);//tamanho do contorno
    stroke(255,0,0);
    point(200, -100, 0);
    
    
    //rotateX(theta);
    

    

   
    pop();
    
    
    
    push();
    
   
    //faz rodar na inclinação certa
    
    
    applyMatrix(
        1, 0, 0, 0,
        0, cos(theta), sin(theta), 0,
        0, -sin(theta), cos(theta), 0,
        0, 0, 0, 1
    );
    //translate(100, -100, 102);
    applyMatrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        100, -100, 102, 1
    );
    applyMatrix(
        cos(v*t), -sin(v*t), 0, 0,
        sin(v*t), cos(v*t), 0, 0,
        0, 0, 2.1, 0,
        0, 0, 0, 2.1
    );
    
    //translate(200, -50, -87);
    applyMatrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        200, -50, -87, 1
    );

    //rotateY(PI/2);
    applyMatrix(
        cos(PI/2), 0, -sin(PI/2), 0,
        0, 1, 0, 0,
        sin(PI/2), 0, cos(PI/2), 0,
        0, 0, 0, 1
    );
    
    
    //translate(-10, -10,0);
    applyMatrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        -10, -10,0, 1
    );
    //rotateZ((v*t)*4);

    applyMatrix(
        cos((v*t)*4), sin((v*t)*4), 0, 0,
        -sin((v*t)*4), cos((v*t)*4), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
    point(0, 0, 0);
    
    

    circle(0,0, 50);
    strokeWeight(10);//tamanho do contorno
    stroke(255,0,0);
    point(25,0)
    pop();
    
    orbitControl();
    
    
    
}
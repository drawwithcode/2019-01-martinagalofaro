function setup() {

createCanvas(windowWidth, windowHeight);
frameRate(30); //smoother animation
angleMode(DEGREES);
background(30);
}


function draw() {
background( 0 , 0 , 0 , 10 );

push()
translate(width/2,height/2); //positioning to the center of the canvas
stroke(134, 168, 231, 30);

//smaller rays --- actual assignment
line ( width / 32 , 0 , ( cos (frameCount * 1 ) * width / 32 ) , ( sin (frameCount * 1 ) * width / 32 ));
line ( width /-32 , 0 , ( cos (frameCount * 1 ) * width /-32 ) , ( sin (frameCount * 1 ) * width /-32 ));


//RAYS
  line (width /  8, 0 , (  cos (frameCount) * width / 8 ) , (  sin (frameCount) * width / 8 ));   //  counterclockwise
  line (width / -8, 0 , ( -cos (frameCount) * width / 8 ) , ( -sin (frameCount) * width / 8 ));  //  clockwise

  line (width / 8 , 0 , ( cos (frameCount) * width / 12 ) , ( sin  (frameCount) * width / 12 ))  //  counterclockwise
  line (width /-8 , 0 , (-cos (frameCount) * width / 12 ) , ( -sin (frameCount) * width / 12 )); //  clockwise


  line (width /-8 , 0 , (-cos (frameCount) * width / 16 ) , ( -sin (frameCount) * width / 16 )); //  counterclockwise
  line (width / 8 , 0 , ( cos (frameCount) * width / 16 ) , (  sin (frameCount) * width / 16 )); //  clockwise


  line (width / -8 , 0 , ( -cos (frameCount) * width / 32 ) , ( -sin (frameCount) * width / 32 ));   //  counterclockwise
  line (width / 8 , 0 ,  ( cos (frameCount) * width / 32 )  , (  sin (frameCount) * width / 32 ));   //  clockwise

//symmetric rays
stroke(113, 123, 164, 30);
    line(width/-2,0,(-cos (frameCount)*width/8),(sin (frameCount)*width/8));
    line(width/2,0,(cos (frameCount)*width/8),(-sin (frameCount)*width/8));

    if(frameCount == 120) {
      pop();
        }


fill(113, 123, 164);

//teeny-tiny stars
push()
    rotate(-frameCount* width/2);
    noStroke()

    ellipse((-cos (frameCount * 2) * width / - 8) , ( -sin (frameCount * 2 ) * width / 8 ), 1);
    ellipse((-cos (frameCount * 2) * width / - 4) , ( -sin (frameCount * 2 ) * width / 4 ), 1);
    ellipse((-cos (frameCount * 2) * width / - 2.5) ,( -sin (frameCount * 2 ) * width / 2.5 ), 1);
    ellipse((-cos (frameCount * 2) * width / - 2) , ( -sin (frameCount * 2 ) * width / 2 ), 1);

pop()


// dots going in circles
push()
    rotate(frameCount);
    noStroke()
    ellipse((-cos (frameCount * 2) * width / - 8),(-sin (frameCount * 2 )* width/ 8), 1);
    ellipse(( cos (frameCount * 2) * width / - 8),(sin (frameCount * 2 ) * width / 8), 1);
pop()

push()
    rotate(-frameCount);
    noStroke()
    ellipse((cos (frameCount * -2) * width / - 8),(sin (frameCount* 2)*width/ -8), 1);
    ellipse((-cos (frameCount * 2) * width / - 8),(-sin (frameCount* -2)*width/ 8), 1);
pop()

//center
push();
stroke(134, 168, 231, 20);

rotate(frameCount);
noFill();
arc( 0 ,0 , windowWidth/16 , windowWidth/16 , frameCount + 0 , frameCount+ 180, OPEN );

  pop();

}

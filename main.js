status1="";
function preload(){
    img=loadImage("dog_cat.jpg")
}
function setup(){
    canvas=createCanvas(650,480);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelloaded(){
    console.log("modelloaded");
    status1="true";
    objectdetector.detect(img,getresult);
}
function getresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
   image(img,0,0,650,480);
   fill("black");
   textSize(20);
   text("Dog",45,75);
   noFill();
   stroke("black");
   rect(40,60,400,400);
   fill("red");
   text("Cat",280,120);
   noFill();
   stroke("red");
   rect(280,100,300,300);
}
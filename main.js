status1="";
objects=[];
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
        objects=results;
    }
}
function draw(){
   image(img,0,0,650,480);
  if(status1!=""){
      for(i=0;i<objects.length;i++){
          document.getElementById("status").innerHTML="Status : Object Detected";
          fill("black");
          textSize(20);
          percent=floor(objects[i].confidence*100);
          text(objects[i].label+" "+percent+"%",objects[i].x+10,objects[i].y+20);
          noFill();
          stroke("black");
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      }
  }
}
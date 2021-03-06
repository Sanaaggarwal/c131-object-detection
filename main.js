status1="";
objects=[];
function preload(){
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelloaded(){
    console.log("modelloaded");
    status1="true";
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
   image(video,0,0,380,380);
  if(status1!=""){
      r=random(255);
      g=random(255);
      b=random(255);
    objectdetector.detect(video,getresult);
      for(i=0;i<objects.length;i++){
          document.getElementById("status").innerHTML="Status : Object Detected";
          document.getElementById("numberofobjects").innerHTML="Number of Objects Detected : "+objects.length;
          fill(r,g,b);
          textSize(20);
          percent=floor(objects[i].confidence*100);
          text(objects[i].label+" "+percent+"%",objects[i].x+10,objects[i].y+20);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      }
  }
}
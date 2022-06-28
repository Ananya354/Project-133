var stat="";
var object=[];
document.getElementById("status").innerHTML="Status: Detecting Objects.";

function setup(){
canvas=createCanvas(730, 500);
canvas.center()
    
objectDetection=ml5.objectDetector('cocossd', modelloaded);
}
    
function modelloaded(){
console.log("Model is loaded successfully");
objectDetection.detect(dining_room_pic, gotResults);
}
    
function gotResults(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
object=results;
}
}
    
function preload(){
dining_room_pic=loadImage("Dining Room.jpg");
}
    
function draw(){
image(dining_room_pic, 0, 0, 730, 500);

if(stat !=""){
for(i=0; i<object.length; i++){
document.getElementById("status").innerHTML="Objects Detected";
var percentage=floor(object[i].confidence*100);
stroke("red");
noFill();
rect(object[i].x, object[i].y, object[i].width, object[i].height);
text(object[i].label+" "+percentage+"%", object[i].x, object[i].y);
}
}
}
    
function back(){
window.location="index.html";
}
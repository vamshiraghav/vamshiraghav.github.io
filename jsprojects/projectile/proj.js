var vel = document.getElementById("vel");
var angle = document.getElementById("angle");
var cir = document.getElementById("circ");
var u =vel.value;
var ag=angle.value;
var vx=u*Math.cos(ag*Math.PI/180);
var vy=-u*Math.sin(ag*Math.PI/180);
var a=10;
var t=10; // time interval for update in milliseconds
var ft=t;
var flag= true;
function run(){
    
    var x=cir.getAttribute("cx");
    var y=cir.getAttribute("cy");
    x=50+Math.round(vx*ft/1000);
    y=450+Math.round(vy*ft/1000)+Math.round(0.5*a*ft*ft/1000000);
    if(y<=450){
    cir.setAttributeNS(null,"cx",x);
    cir.setAttributeNS(null,"cy",y);  
    ft+=t;}
}
var fun=setInterval(() =>run(),t);
vel.onchange = function(){
    //alert("came vel");
 u = vel.value ;
 ag = angle.value;
 vx=u*Math.cos(ag*Math.PI/180);
vy=-u*Math.sin(ag*Math.PI/180);
 cir.setAttributeNS(null,"cx",50);
 cir.setAttributeNS(null,"cy",445);
 ft=0;
 
}
angle.onchange = function(){
    //alert("came angle");
    u = vel.value ;
    ag = angle.value;
    document.getElementById("anv").innerHTML=ag;
    vx=u*Math.cos(ag*Math.PI/180);
   vy=-u*Math.sin(ag*Math.PI/180);
    cir.setAttributeNS(null,"cx",50);
    cir.setAttributeNS(null,"cy",445);
    ft=0;
    }
   
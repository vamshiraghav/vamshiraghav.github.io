var circ = document.getElementById("circ");
circ.onclick = function(){
    var rad = circ.getAttributeNS(null,"r");
    circ.setAttributeNS(null,"r",rad-10);

}
var hour= document.getElementById("hour");
var mint= document.getElementById("mint");
var sec = document.getElementById("sec");
var n1 = document.getElementById("1");
var n2 = document.getElementById("2");
var n3 = document.getElementById("3");
var d = new Date();
function getlocdeg(r,deg){
    var x=r*Math.cos(deg* Math.PI / 180);
    var y=r*Math.sin(deg* Math.PI / 180);
    return [Math.round(x),Math.round(y)]; 
}

function painttime(){
    var d = new Date();
    secd=d.getSeconds()*6-90;
    var t=secd+88;
    mind = d.getMinutes()*6 +0.1*secd/6-90;
    hrd = d.getHours()*30+mind/12-90;
    var m= mind+88;
    var h= hrd+88;
    n1.setAttributeNS(null,"transform","rotate("+t+",150,150)");
    n1.innerHTML=d.getSeconds();
    n2.setAttributeNS(null,"transform","rotate("+m+",150,150)");
    n2.innerHTML=d.getMinutes();
    n3.setAttributeNS(null,"transform","rotate("+h+",150,150)");
    n3.innerHTML=d.getHours();
    
    
    //alert("hi"+secd+"m"+mind+"h"+hrd+"-"+d.getHours());
    var et=getlocdeg(90,secd);
    sec.setAttributeNS(null,"x2",et[0]+150);
    sec.setAttributeNS(null,"y2",et[1]+150);
    var et=getlocdeg(80,mind);
    //alert(et);
    mint.setAttributeNS(null,"x2",et[0]+150);
    mint.setAttributeNS(null,"y2",et[1]+150);
    var et=getlocdeg(70,hrd);
    //alert(et);
    hour.setAttributeNS(null,"x2",et[0]+150);
    hour.setAttributeNS(null,"y2",et[1]+150);
}
let timerId = setInterval(() => painttime(), 1000);
//setInterval(function() {
//    painttime();
//  }, 1000);
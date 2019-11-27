
function paintkite(cx,cy,w,h,angle,id){
    //cx,cy center of kite
    // angle is angle of kite wrt to center line anticlockwise direction
    var path=document.getElementById(id);
    var topx=cx -Math.round(h*0.5*Math.sin(angle*Math.PI/180));
    var topy=cy-Math.round(h*0.5*Math.cos(angle*Math.PI/180));
    var tailx=cx+Math.round(h*0.5*Math.sin(angle*Math.PI/180));
    var taily=cy+Math.round(h*0.5*Math.cos(angle*Math.PI/180));
    var lx=cx-Math.round(w*0.5*Math.cos(angle*Math.PI/180));
    var ly=cy +Math.round(w*0.5*Math.sin(angle*Math.PI/180));
    var rx=cx+Math.round(w*0.5*Math.cos(angle*Math.PI/180));
    var ry=cy-Math.round(w*0.5*Math.sin(angle*Math.PI/180));
    path.setAttributeNS(null,"d","M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy+"Z M"+lx+" "+ly+" Q"+topx+" "+topy+" "+rx+" "+ry+"M"+tailx+" "+taily+" t -10 10 10 20 -10 30 10 40");
    //path.setAttributeNS(null,"d","M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy+"Z M"+lx+" "+ly+" Q"+topx+" "+topy+" "+rx+" "+ry+"Z M"+tailx+" "+taily+" t -10 10 10 20 -10 30 10 40");
    //alert("M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy);

}
paintkite(100,100,200,200,0,"kitepath");
var kid="kitepath";
var ag=0;
var cx = 300;
var cy = 300;

function krot(){
    ag+=Math.round(10*(Math.random()-0.5));
    cx+=Math.round(20*(Math.random()-0.5));
    cy+=Math.round(20*(Math.random()-0.5));
    paintkite(cx,cy,200,200,ag,kid);

}
setInterval(krot,60);

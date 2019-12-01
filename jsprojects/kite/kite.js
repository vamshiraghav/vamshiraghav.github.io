
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
    path.setAttributeNS(null,"d","M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy+"Z M"+lx+" "+ly+" Q"+topx+" "+topy+" "+rx+" "+ry+"M"+tailx+" "+taily+" t -10 10 10 10 -10 10 ");

    //path.setAttributeNS(null,"d","M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy+"Z M"+lx+" "+ly+" Q"+topx+" "+topy+" "+rx+" "+ry+"Z M"+tailx+" "+taily+" t -10 10 10 20 -10 30 10 40");
    //alert("M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy);
}
function paintkite3d(cx,cy,cz,w,h,angle,xang,yang,id,px,py,scale,sw,sh,sd){
    //cx,cy center of kite
    // angle is angle of kite wrt to center line anticlockwise direction
    var path=document.getElementById(id);
    var thread=document.getElementById(tid);
    var zadd=Math.round(-w*0.5*Math.sin(yang*Math.PI/180)+h*0.5*Math.sin(xang*Math.PI/180));
    w=Math.round(w*Math.cos(yang*Math.PI/180));
    h=Math.round(h*Math.cos(xang*Math.PI/180));
    
    var topx=cx -Math.round(h*0.5*Math.sin(angle*Math.PI/180));
    var topy=cy-Math.round(h*0.5*Math.cos(angle*Math.PI/180));
    var top3=xyzper(topx,topy,cz-zadd,px,py,scale,sw,sh,sd);
    //alert(top3);
    //alert([w,h,zadd]);
    topx=top3[0];
    topy=top3[1];
    var tailx=cx+Math.round(h*0.5*Math.sin(angle*Math.PI/180));
    var taily=cy+Math.round(h*0.5*Math.cos(angle*Math.PI/180));
    var tail3=xyzper(tailx,taily,cz+zadd,px,py,scale,sw,sh,sd);
    //alert(tail3);
    tailx=tail3[0];
    taily=tail3[1];
    var lx=cx-Math.round(w*0.5*Math.cos(angle*Math.PI/180));
    var ly=cy +Math.round(w*0.5*Math.sin(angle*Math.PI/180));
    var l3=xyzper(lx,ly,cz+zadd,px,py,scale,sw,sh,sd);
    lx=l3[0];
    ly=l3[1];
    var rx=cx+Math.round(w*0.5*Math.cos(angle*Math.PI/180));
    var ry=cy-Math.round(w*0.5*Math.sin(angle*Math.PI/180));
    var r3=xyzper(rx,ry,cz-zadd,px,py,scale,sw,sh,sd);
    rx=r3[0];
    ry=r3[1];
    var thread3=xyzper(cx,cy,cz,px,py,scale,sw,sh,sd);
    path.setAttributeNS(null,"d","M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy+"Z M"+lx+" "+ly+" Q"+topx+" "+topy+" "+rx+" "+ry+"M"+tailx+" "+taily+" t -1 1 1 1 -1 1 ");
    thread.setAttributeNS(null,"d","M 800,700 L"+thread3[0]+" "+thread3[1]);
    //path.setAttributeNS(null,"d","M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy+"Z M"+lx+" "+ly+" Q"+topx+" "+topy+" "+rx+" "+ry+"Z M"+tailx+" "+taily+" t -10 10 10 20 -10 30 10 40");
    //alert("M"+tailx+" "+taily+" "+topx+" "+topy+" "+rx+" "+ry+" "+tailx+" "+taily+" "+lx+" "+ly+" "+topx+" "+topy);
}
function xyzper(x,y,z,px,py,scale,w,h,d){
        var dy=Math.round(d/2);
        var dx=Math.round(w*dy/h);
        var newx=Math.round(((px-dx)*z/scale)+x*(w*(scale-z)+2*z*dx)/(w*scale));                                           
        var newy=Math.round(((py-dy)*z/scale)+y*(w*(scale-z)+2*z*dy)/(w*scale));
        return [newx,newy];
}
function drawperspect(w,h,d,cx,cy,scale,mar){
    // w-width of svg,h-height of svg, d-minimum depth of longest perspective
    //(cx,cy) -center of perspective , scale- scale down to longest perspect
    //mar-margin to svg
    var per=document.getElementById("perspect");
    var img1=document.getElementById("img1");
    var otlx=0+mar;
    var otly=0+mar;
    var otrx=w-mar;
    var otry=mar;
    var obrx=w-mar;
    var obry=h-mar;
    var oblx=mar;
    var obly=h-mar;
    var dy=Math.round(d/2);
    var dx=Math.round(w*dy/h);
    per.setAttributeNS(null,"d","M "+otlx+" "+otly+" L"+otrx+" "+otry+" "+obrx+" "+obry+" "+oblx+" "+obly+" "+otlx+" "+otly+" "+(cx-dx)+" "+(cy-dy)+" "+(cx+dx)+" "+(cy-dy)+" "+otrx+" "+otry+" "+(cx+dx)+" "+(cy-dy)+" "+(cx+dx)+" "+(cy+dy)+" "+obrx+" "+obry+" "+(cx+dx)+" "+(cy+dy)+" "+(cx-dx)+" "+(cy+dy)+" "+oblx+" "+obly+" "+(cx-dx)+" "+(cy+dy)+" "+(cx-dx)+" "+(cy-dy));
    //img1.setAttributeNS(null,"x",(cx-dx));
    //img1.setAttributeNS(null,"y",(cy-dy));
    //img1.setAttributeNS(null,"width",(dx*2));
    //img1.setAttributeNS(null,"height",(dy*2));
    
}
paintkite(100,100,100,100,0,"kitepath");
var kid="kitepath";
var tid="thread";
var agz=0;
var agx=0;
var agy=0;
var cx = 800;
var cy = 700;
var cz= 100;
var px=800;
var py=600;
var angflag=1;
var xaflag=1;
var yaflag=1;
var angswing=10;
var swingflag=true;
function krot(){
    
    if(cy>750){
        cy=650;
        agx=90;
        agy=0;
        agz=0;
    }else{
        if(agz>angswing){
            angflag=-1;
        }else if(agz<-angswing){
            angflag=1;
        }
        if(agx>15){
            xaflag=-1;
        }else if(agx<-15){
            xaflag=1;
        }
        if(agy>20){
            yaflag=-1;
        }else if(agy<-20){
            yaflag=1;
        }
        agz+=angflag*Math.round(4*(Math.random()));
        agx+=xaflag*Math.round(2*(Math.random()));
        agy+=yaflag*Math.round(3*(Math.random()));
        //cx+=Math.round(20*(Math.random()-0.5));
        //cy+=Math.round(5*(Math.random()-0.5));
        //cy++;
        //cz+=Math.round(20*(Math.random()-0.5));
        //px++;
        //py++;
        //cz=cz+3;
        //cy=cy+2;
    }
    //paintkite(cx,cy,50,50,ag,kid);
    drawperspect(1650,800,50,px,py,1000,10);
    paintkite3d(cx,cy,cz,100,100,agz,agx,agy,kid,px,py,5000,1650,800,50);
    
    //px++;
    
    if(px>1650){
        px=10;
    }
    if(py>800){
        py=10;
    }

}
//drawperspect(1200,600,50,600,300,1000,10);
//paintkite3d(800,600,100,100,100,0,0,90,kid,600,300,1000,1200,600,50);
var svg=document.getElementById("svgbox");
svg.onmousedown = function(event) {

    //px = event.clientX;
    //py = event.clientY;
    var xdif=px-event.clientX;
    var ydif=py-event.clientY;
    moveAt(event.clientX, event.clientY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        px =xdif+ pageX;
        py =ydif+pageY;
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    svg.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      svg.onmouseup = null;
    };
  
  };
  
  document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        //alert("up button");
        cx=cx-Math.round(1*Math.sin(agz*Math.PI/180));
        cy=cy-Math.round(2*Math.cos(agz*Math.PI/180));
        cz=cz+3;
    }
    else if (e.keyCode == '40') {
        // down arrow
        cy=cy+10;
        cz-=10;
    }
    else if (e.keyCode == '37') {
       // left arrow
       cx=cx-10;
    }
    else if (e.keyCode == '39') {
       // right arrow
       cx=cx+10;

    }
    else if (e.keyCode == '82') {
        // r 82 ,release thread
        cz=cz+5;
 
     }
     else if (e.keyCode == '84') {
        // t 84 , tight thread
        cz-=10;
        cy--;
 
     }
     else if (e.keyCode == '83') {
        // t 83 , kite will rotate
        if(swingflag){
        angswing=500;
        swingflag=false;}
        else{
            angswing=10;
            swingflag=true;
        }

 
     }

}
  
setInterval(krot,40);

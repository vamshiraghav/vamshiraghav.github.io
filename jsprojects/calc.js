var top1=document.getElementById("top1");

for (let index = 0; index < 10; index++) {
    eval("var n"+index+"=document.getElementById('"+index+"');");
    //document.write("var n"+index+"=document.getElementById('"+index+"');");
    eval("n"+index+".onclick=function(){top1.innerHTML=top1.innerHTML+n"+index+".innerHTML;}");
    //document.write("n"+index+".onclick=function(){top1.innerHTML=top1.innerHTML+n"+index+".innerHTML;}")
    
}
 var ce=document.getElementById("ce");
 ce.onclick= function(){
    top1.innerHTML = 0;
 }

 var result = document.getElementById("result");
 result.onclick = function(){
    hist.innerHTML = top1.innerHTML;
     top1.innerHTML= eval(top1.innerHTML);
 }

 var plus=document.getElementById("plus");
 plus.onclick= function(){
    top1.innerHTML =  top1.innerHTML+"+";
 }
 var minus=document.getElementById("minus");
 minus.onclick= function(){
    top1.innerHTML =  top1.innerHTML+"-";
 }

 var multi=document.getElementById("multi");
 multi.onclick= function(){
    top1.innerHTML =  top1.innerHTML+"*";
 }

 var division=document.getElementById("division");
 division.onclick= function(){
    top1.innerHTML =  top1.innerHTML+"/";
 }

 var symbol=document.getElementById("symbol");
 symbol.onclick= function(){
     var temp=eval(top1.innerHTML);
     if(temp<=0){
        top1.innerHTML =  eval(top1.innerHTML*(-1));
     }
     else{
    top1.innerHTML =  "-"+top1.innerHTML;
     }
 }

 var sqrt=document.getElementById("sqrt");
 sqrt.onclick= function(){
    top1.innerHTML =  Math.sqrt(top1.innerHTML);
 }

 var inver=document.getElementById("inver");
 inver.onclick= function(){
    top1.innerHTML =  eval(1/top1.innerHTML);
 }

 var percen=document.getElementById("percen");
 percen.onclick= function(){
    top1.innerHTML =  eval(100*top1.innerHTML);
 }

 var braces=document.getElementById("braces");
 braces.onclick= function(){
    top1.innerHTML = "("+top1.innerHTML+")";
 }

 var hist=document.getElementById("hist");

 
 var clear=document.getElementById("clear");
 clear.onclick= function(){
    top1.innerHTML = top1.innerHTML.substring(0,top1.innerHTML.length-1) ;
   
 }

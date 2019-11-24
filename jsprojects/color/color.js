var block =  document.getElementById("block")
var ired = document.getElementById("red")
var igreen = document.getElementById("green")
var iblue = document.getElementById("blue")
var tred = document.getElementById("inred");
var tgreen =  document.getElementById("ingreen");
var tblue = document.getElementById("inblue");
function ntohex(a){
    a = parseInt(a,10);
    hexString = a.toString(16);
    if(hexString.length==1){
        hexString="0"+hexString;
    }
    return hexString.toUpperCase();;
}
function changecolor(){
    block.innerHTML = 'rgb(' + ired.value + ',' + igreen.value + ',' + iblue.value + ')'+'#' + ntohex(ired.value)+ntohex( igreen.value) +ntohex(iblue.value);
    block.style.backgroundColor = 'rgb(' + ired.value + ',' + igreen.value + ',' + iblue.value + ')';

}
ired.onchange =  function(){
    tred.value = ired.value;
    changecolor();
}
igreen.onchange =  function(){
    tgreen.value = igreen.value;
    changecolor();
}
iblue.onchange =  function(){
    tblue.value = iblue.value;
    changecolor();
}
tred.onchange = function(){
    ired.value = tred.value;
    changecolor();
}
tgreen.onchange = function(){
    igreen.value = tgreen.value;
    changecolor();
}
tblue.onchange = function(){
    iblue.value = tblue.value;
    changecolor();
}

var countEl = document.getElementsByClassName("number")[0];
var plusEl = document.getElementsByClassName("positive")[0];
var minusEl = document.getElementsByClassName("negative")[0];
var resetEl = document.getElementById("resetbtn");

var upsies = function(){
    countEl.textContent=parseFloat(countEl.textContent)+1;
};
var downsies = function(){
    if(parseFloat(countEl.textContent)>0){
    countEl.textContent= parseFloat(countEl.textContent)-1;};
    return;
};

var reset= function(){
    countEl.textContent= 0
};

// plusEl.addEventListener("click",upsies);
// minusEl.addEventListener("click",downsies);
// resetEl.addEventListener("click",reset);

document.addEventListener("keydown" ,function(event){
if(event.key==="ArrowUp"){upsies();}
else if(event.key==="ArrowDown"){downsies();}
else if(event.key==="R"||event.key==="r"){reset();}
});
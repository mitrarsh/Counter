var countEl = document.getElementsByClassName("number")[0];
var plusEl = document.getElementsByClassName("positive")[0];
var minusEl = document.getElementsByClassName("negative")[0];

var upsies = function(){
    countEl.textContent=parseFloat(countEl.textContent)+1;
};
var downsies = function(){
    countEl.textContent= parseFloat(countEl.textContent)-1;
};

plusEl.addEventListener("click",upsies);
minusEl.addEventListener("click",downsies);
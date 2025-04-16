var hitrn = 0;
var timer = 60;
var score = 0;
function makeBubble(){
    var clutter = "";
    for(var i = 1;i<145;i++){
        let rn = Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}

function setTimer(){
    var timeint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }else{
            clearInterval(timeint);
            document.querySelector(".pbtm").innerHTML= `<h1>Game Over </h1>`;
            document.querySelector("#hitval").textContent = 0;
        }
    },1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function incScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}
function game(){
    document.querySelector(".pbtm").addEventListener("click",function(dets){
        var clickednum = Number(dets.target.textContent);
        if(hitrn === clickednum){
            incScore();
            makeBubble();
            getNewHit();
        }
    })
}
getNewHit();
setTimer();
makeBubble();
game();
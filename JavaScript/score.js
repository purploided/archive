document.querySelector('#fileInput').onclick=function(){
    var score = document.getElementById("score").innerHTML;
    score++;
    document.getElementById("score").innerHTML = score;
}
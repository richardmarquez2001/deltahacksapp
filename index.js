function myMove() {

    var elem = document.getElementById("animate");

    var pos = 400;

    var id = setInterval(frame, 30);

    function frame() {

        if (pos === 0) {

            clearInterval(id);

        } else {

            pos--;

            elem.style.height = pos + "px";
        }
    }
}

//function handleClick() {
   // window.open("file:///C:/Users/Ameer/Documents/Github/deltahacksapp/Delta.html", "_blank");
   // alert("yeet");
 // };

function timerCnt(){
    let count = 0;
    var x = setInterval(function(){
        document.getElementById("timer").innerHTML= count.toString() + "s";
        if(count >= 10) {
            clearinterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
        count += 1;
    },1000);
}



myMove();
timerCnt();
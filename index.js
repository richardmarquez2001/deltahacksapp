let min = 1;
let seconds = 1;
let minNum = 0;
let secondNum = 0;
let questions = ["What is 3/5 + 2/6?", "What is 3/2 * 4/2?", "Divide 6 by 3"];
let q = 0;

function timerCnt(){
    let count = 0;
    let x = setInterval(function(){
        minNum = Math.floor(count / 60);
        secondNum = count - (minNum * 60);
        if (minNum < 1){
            document.getElementById("timer").innerHTML= count.toString() + "s";
        }else{
            document.getElementById("timer").innerHTML= minNum.toString() + "m " + secondNum.toString() + "s";
        }

        if(count >= ((min * 60) + seconds)) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
            $("html").load("break.html");
        }
        count += 1;
    },1000);
}

$("#question").html(questions[q].toString());

$("#submit").click(function(e){

    e.preventDefault();
    console.log("reached");
    q += 1;
    if(q === questions.length){
        $("html").load("break.html");
        clearInterval(x);
    }

    $("#question").html(questions[q].toString());
});

$(".wrapper")

    .css("display", "none")

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

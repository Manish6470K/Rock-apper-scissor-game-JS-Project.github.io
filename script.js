var user = 0;
var bot = 0;
var resultBot = 0;
var resultUser = 0;
// Click Handle (User Choice)
$('#choiceRock').click(function(){ 
    user = 1;
    output();
});
$('#choicePaper').click(function(){ 
    user = 2;
    output();
});
$('#choiceScissor').click(function(){ 
    user = 3;
    output();
});



//  Global Variable for bot
function bot1(){
    var ran = Math.floor((Math.random()*3)+1);
    return ran;
} 
 

function result(){
    if(user==1 && bot==2){
        resultBot++;
        lose()
    }
    if(user==1 && bot==3){
        resultUser++;
        win()
    }
    if(user==2 && bot==3){
        resultBot++;
        lose()
    }
    if(bot==1 && user==2){
        resultUser++;
        win()
    }
    if(bot==1 && user==3){
        resultBot++;
        lose()
    }
    if(bot==2 && user==3){
        resultUser++;
        win()
    }
    if(bot==user){
        tie();
    }
}

//Win
function win(){
    $('#res').html("You Win!!");
}
//Lose
function lose(){
    $('#res').html("You Lose!!");
}
//Tie
function tie(){
    $('#res').html("Tie!!");
}

// Score Board Update 
function update(){
    $('#showBotScore').html(resultBot);
    $('#showUserScore').html(resultUser);
}

function changeImage(){
    if(bot==1){
        $('#BotImg').attr('src',"image/rock.jpg");
    }
    if(bot==2){
        $('#BotImg').attr('src',"image/paper.jpg");
    }
    if(bot==3){
        $('#BotImg').attr('src',"image/scissor.jpg");
    }
}

function changeColor(){
    if(resultBot>resultUser){
        $("#botBtn").css('background','lime');   
        $("#userBtn").css('background','red');
    }
    if(resultBot<resultUser){
        $("#botBtn").css('background','red');   
        $("#userBtn").css('background','lime');
    }
    if(resultBot==resultUser){
        $("#botBtn").css('background','white');   
        $("#userBtn").css('background','white');
    }
}

function output(){
    bot = bot1();
    changeImage();
    result()
    changeColor();
    update();
}
function reset(){
    $('#BotImg').attr('src','image/bot.jpg');
    $('#showBotScore').html('0');
    $('#showUserScore').html('0');
    $('#res').html("Welcome");
    $('#botBtn').css('background','white');
    $('#userBtn').css('background','white'); 
    resultUser = 0;
    resultBot = 0;
}
$('#reset').click(function(){
    reset();
});
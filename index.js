var buttoncolors=["red","green","blue","yellow"];
 var gamepattern=[];
 var userchoosenpattern=[];
var gameon=0;
var level=0;
$("body").keypress(function(){
    if (gameon===0){
    nextSequence();
    }
    gameon=1;
});
    



 function animatePress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");
    },100);
   
    
 }
 function playsound(name){
    var beat=new Audio("sounds/"+name+".mp3");
    beat.play();
}

 $(".btn").click(function(){
    
    var userchoosencolor;
   userchoosencolor=$(this).attr("id");
   playsound(userchoosencolor);
   userchoosenpattern.push(userchoosencolor);
   animatePress(userchoosencolor);
    checkAnswer(userchoosenpattern.length-1)
  });
  function checkAnswer(gamelevel){
    if(userchoosenpattern[gamelevel]===gamepattern[gamelevel]){
        if(userchoosenpattern.length===gamepattern.length){
       
        setTimeout(function(){
            nextSequence()
        },300)
        }

    }
    else{
        
         playsound("wrong");   //Playing wrong sound ; 
         $("body").addClass("game-over");
         setTimeout(function(){
           $("body").removeClass("game-over");
         },200);
        $("h1").text("Game Over, Press Any Key to Restart!");
        
     
      
            startOver();
        
      
    }
  }
  function startOver(){
    gamepattern=[];
    level=0;
   
    
    gameon=0;
   
  }
function nextSequence(){
    userchoosenpattern=[];
    level+=1;
    $("h1").text("Level-"+level)
    var randomnumber=Math.random()*4;
    randomnumber=Math.floor(randomnumber);
    var randomchoosencolor;
   randomchoosencolor=buttoncolors[randomnumber];
   gamepattern.push(randomchoosencolor);
   $("#"+randomchoosencolor).fadeOut(100).fadeIn(100);
   playsound(randomchoosencolor);
   
}

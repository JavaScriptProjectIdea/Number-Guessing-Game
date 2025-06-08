$(document).ready(function () {
 var randomnummber=Math.floor(Math.random()*100);
 var attempts=[];
$("#guessBtn").on('click', function () {
  let guess=Number($("#guessInput").val());
  
  if(guess>randomnummber)
  {
    $("#message").text("Too high");
  }
  else{
    if(guess<randomnummber){
      $("#message").text("Too low");
    }
    else
    $("#message").text("Correct!");
  }
  attempts.push(guess);
 $("#history").html("<strong>History:</strong><br>"+attempts.join(',<br>'));
 $("#history").show();
 $("#message").show();

  
});

$("#resetBtn").on('click', function () {
  $("#history").hide();
    $("#message").hide();
  attempts=[];
  randomnummber=Math.floor(Math.random()*100);
  $("#guessInput").val("");
});

  
});
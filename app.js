var score = {
 userScore: 0,
 cpuScore: 0
}
var userPick;
var cpuPick;

var allOptions = ["sasso", "carta","forbice"];

var allOptions = [
  {
    name: "sasso" ,
    image: "assets/sasso.png"
  },
  {
    name: "carta" ,
    image: "assets/carta.png"
  },
  {
    name: "forbice" ,
    image: "assets/forbice.png"
  },
  
]

var possibleUserPick = document.getElementsByClassName("user-choice");

for(var i = 0; i<possibleUserPick.length; i++){
 possibleUserPick[i] .addEventListener('click',onUserPick);
}

function onUserPick(){
  userPick=this.dataset.name;
 console.log("la tua scelta è :",userPick);
 generateCpuPick();

 var cpuPickImage = "<img src='" + cpuPick.image + "'/>";
 var cpuPickText = "<h3>" + cpuPick.name + "</h3>";

 document.getElementById("computer-choice") .innerHTML = cpuPickImage + cpuPickText;
 document.getElementById("result").innerHTML=checkWhoWon();

 document.getElementById("player-score").innerHTML= score.userScore;
 
 document.getElementById("cpu-score").innerHTML= score.cpuScore;
}


function generateCpuPick(){
               
 cpuPick = allOptions[Math.floor(Math.random() *allOptions.length)];
               
}

generateCpuPick();

function checkWhoWon(){
 if(userPick==cpuPick.name){
   return "hai pareggiato";
  }
  else{
    if(userPick=="sasso"){
      if(cpuPick.name=="forbice"){
        score.userScore++;
      return "hai vinto";
      } else{
        score.cpuScore++;
        return "hai perso";
      }

      }  if(userPick =="carta"){
      if(cpuPick.name =="sasso"){
        score.userScore++;
        return "hai vinto";
      } else{
        score.cpuScore++;
        return "hai perso";
      }
      }  if(userPick=="forbice"){
      if(cpuPick.name=="carta"){
        score.userScore++;
        return "hai vinto";
      } else{
        score.cpuScore++;
        return "hai perso";
      }                   
    }
  }
 
}



			
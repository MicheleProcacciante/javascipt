var score = {
 userScore: 0,
 cpuScore: 0
}
var userPick;
var cpuPick;

var allOptions = ["sasso", "carta","forbice"];

var possibleUserPick = document.getElementsByClassName("user-choice");

for(var i = 0; i<possibleUserPick.length; i++){
 possibleUserPick[i] .addEventListener('click',onUserPick);
}

function onUserPick(){
  userPick=this.dataset.name;
 console.log("la tua scelta è :",userPick);
 generateCpuPick();
 console.log("la  scelta del computer è :",cpuPick);
 checkWhoWon();
}


function generateCpuPick(){
               
 cpuPick = allOptions[Math.floor(Math.random() *allOptions.length)];
               
}

generateCpuPick();

function checkWhoWon(){
 if(userPick==cpuPick){
 console.log("hai pareggiato"); 
}
                else{
                    if(userPick=="sasso"){
                        if(cpuPick=="forbice"){
                                console.log("hai vinto");
                        } else{
                            console.log("hai perso");
                        }

                    } else if(userPick =="carta"){
                        if(cpuPick =="sasso"){
                            console.log("hai vinto");
                        } else{
                            console.log("hai perso");
                        }
                    } else if(userPick=="forbice"){
                        if(cpuPick=="carta"){
                            console.log("hai vinto");
                        } else{
                            console.log("hai perso");
                        }                   
                    }
                }
            }
document.getElementById("result").innerHTML = cpuPick;

			
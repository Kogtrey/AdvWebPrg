var userChoice = null;

var optionsList = document.getElementsByClassName('options');

var results = document.getElementsByClassName('result');

var moreQuestions = {

  QsetOrigin: {
    Options:{
      optionA:"Go to the cave",
      optionB:"Keep walking down the road",
      optionC:"Curl up in a ball on the road and eventually starve to death",
    },
    Results:{
      resultA:"You go into the cave with no way to protect yourself. You were just coming home from school and you are certainly not a warrior. A laviathan class dragon that lives in the depths of this cave is ont top of you in seconds. Do you fight or run?",
      resultB:'"Seeing as I am just coming home from school there is no need to go into the cave", you think. So you safely make your way home to your family. A few blocks from your house you notice a car is parked with its doors wide open and running. What do you do?',
      resultC:"Panicking as you do with many decisions, you curl up on the road. Many people drive by you not bothering to stop. You were almost home but you are not brave enough to stand back up and walk. Do you pull yourself together or stay down?",
    }
  },
  QsetFromA: {
    Options:{
      optionA:"fight",
      optionB:"run"
    },
    Results:{
      resultA:"You try throwing your backpack at the dragon in hopes it would be scared of homework. It glances off of the dragons cheek. This angers the dragon, causing him to roast you in flame. You die...",
      resultB:"You take off for the entrance of the cave. The dragon cuts you off just as you make the entrance. You were so close but unfortunately begin being dragged back down the cave by the dragon."
    }
  },
  QsetFromB: {
    Options:{
      optionA:"Get in the car and drive away",
      optionB:"Keep walking home"
    },
    Results:{
      resultA:"You hop in the car and begin driving. Its a sports car so you decide to test how fast it goes. You hit a max speed of 170mph and crash right through a building, blowing up the car and yourself.  Maybe try not to go that fast in a neighborhood next time.",
      resultB:"You are obviously not a very curious person so you just keep walking safely home. Avoiding any sort of confrontation or storyline what-so-ever"
    },
  },
  QsetFromC: {
    Options:{
      optionA:"Pull yourself together",
      optionB:"Stay down"
    },
    Results:{
      resultA:"Pulling yourself together you stand back up.  Great job!",
      resultB:"Really? You dont want to even try walking anymore? Just want to starve then? Fine. You starve. GG"
    }
  }
}
function sendInput(){
  userInput = document.getElementById("userAnswerA").value;
  if(userInput == "fight"){
    document.getElementById("optionsA").classList.toggle("hide");
    document.getElementById("resultA1").style.display = "none";
    document.getElementById("resultA2").style.display = "block";
  }
  else if (userInput == "run") {
    document.getElementById("optionsA").classList.toggle("hide");
    document.getElementById("resultA2").style.display = "none";
    document.getElementById("resultA1").style.display = "block";
  }
}

var options = document.getElementsByClassName('option');
for(var i=0; i < options.length;i++){
  options[i].addEventListener("click",function(){
    setActiveButton(this);
    userChoice = this.id;
    for(var j=0; j<results.length; j++){
      results[j].style.display = "none";
    }


    switch (userChoice) {
      case "optionI1":
        document.getElementById("optionsinitial").classList.toggle("hide");
        document.getElementById("resultI1").style.display = "block";
        document.getElementById("optionsA").style.display = "block";
        break;
      case "optionI2":
        document.getElementById("optionsinitial").classList.toggle("hide");
        document.getElementById("resultI2").style.display = "block";
        document.getElementById("optionsB").style.display = "block";
        break;
      case "optionI3":
        document.getElementById("optionsinitial").classList.toggle("hide");
        document.getElementById("resultI3").style.display = "block";
        document.getElementById("optionsC").style.display = "block";
        break;
      case "optionB1":
        document.getElementById("optionsB").classList.toggle("hide");
        document.getElementById("resultB2").style.display = "none";
        document.getElementById("resultB1").style.display = "block";
        break;
      case "optionB2":
        document.getElementById("optionsB").classList.toggle("hide");
        document.getElementById("resultB1").style.display = "none";
        document.getElementById("resultB2").style.display = "block";
        break;
      case "optionC1":
        document.getElementById("optionsC").classList.toggle("hide");
        document.getElementById("resultC2").style.display = "none";
        document.getElementById("resultC1").style.display = "block";
        break;
      case "optionC2":
        document.getElementById("optionsC").classList.toggle("hide");
        document.getElementById("resultC1").style.display = "none";
        document.getElementById("resultC2").style.display = "block";
        break;
      default:

    }

  });
}

function setActiveButton(thisElement) {
  var current = document.getElementsByClassName('active');
  current[0].className = current[0].className.replace(' active','');
  thisElement.className += ' active';
}

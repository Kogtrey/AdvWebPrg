

function validateForm(id){
  var input;
  var letters = /^[A-Za-z]+$/;
  var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  var PassRegex = /^[a-zA-Z]\w{3,14}$/;
  switch (id) {
    case "FirstNameIn":
      idInvalid = "first-name-invalid";
      input = document.getElementById(id);
      var parent = document.getElementById('first-name')
      if(!letters.test(input.value)){
        if(!input.classList.contains("invalid")){
          input.classList.add("invalid");
          AppendMessage("Spaces or numbers detected in name", parent, idInvalid);
        }
        if(input.classList.contains("valid")){
          input.classList.remove("valid");
        }


      }else{
        if(input.classList.contains("invalid")){
          input.classList.remove("invalid");
          DeleteMessage(parent,idInvalid);
        }
        if(!input.classList.contains("valid")){
          input.classList.add("valid")
        }

      }
      break;
    case "LastNameIn":
    idInvalid = "last-name-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('last-name')
    if(!letters.test(input.value)){
      if(!input.classList.contains("invalid")){
        input.classList.add("invalid");
        AppendMessage("Spaces or numbers detected in name", parent, idInvalid);
      }
      if(input.classList.contains("valid")){
        input.classList.remove("valid");
      }


    }else{
      if(input.classList.contains("invalid")){
        input.classList.remove("invalid");
        DeleteMessage(parent,idInvalid);
      }
      if(!input.classList.contains("valid")){
        input.classList.add("valid")
      }

    }
    break;
    case "EmailIn":
    idInvalid = "email-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('email-info')
    if(!email.test(input.value)){
      if(!input.classList.contains("invalid")){
        input.classList.add("invalid");
        AppendMessage("email is not recognizable", parent, idInvalid);
      }
      if(input.classList.contains("valid")){
        input.classList.remove("valid");
      }

    }else{
      if(input.classList.contains("invalid")){
        input.classList.remove("invalid");
        DeleteMessage(parent,idInvalid);
      }
      if(!input.classList.contains("valid")){
        input.classList.add("valid")
      }

    }
    break;
    case "PasswordIn":
    idInvalid = "password-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('password')
    if(!PassRegex.test(input.value)){
      if(!input.classList.contains("invalid")){
        input.classList.add("invalid");
        AppendMessage("Password must have between 4 and 15 characters and no spaces", parent, idInvalid);
      }
      if(input.classList.contains("valid")){
        input.classList.remove("valid");
      }

    }else{
      if(input.classList.contains("invalid")){
        input.classList.remove("invalid");
        DeleteMessage(parent,idInvalid);
      }
      if(!input.classList.contains("valid")){
        input.classList.add("valid")
      }

    }
    break;
    case "ConfirmPasswordIn":
    idInvalid = "confirm-password-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('confirm-password')
    if(input.value != document.getElementById('PasswordIn').value){
      if(!input.classList.contains("invalid")){
        input.classList.add("invalid");
        AppendMessage("Passwords dont match", parent, idInvalid);
      }
      if(input.classList.contains("valid")){
        input.classList.remove("valid");
      }

    }else{
      if(input.classList.contains("invalid")){
        input.classList.remove("invalid");
        DeleteMessage(parent,idInvalid);
      }
      if(!input.classList.contains("valid")){
        input.classList.add("valid")
      }

    }
    break;
    default:

  }
}

function validatePage() {
  var valid = false;
  // for (var i = 0; i < document.getElementsByClassName('input').length; i++) {
  //   if(document.getElementsByClassName('input')[i] == null){
  //     valid = false;
  //   }
  // }
  if(document.getElementsByClassName('invalid')[0] == undefined){
    console.log(document.getElementsByClassName('invalid'));
    location.replace("../index.html");
  }
  // else if (!valid) {
  //   alert("Make sure every field is completed");
  // }
  else{
    alert("Fix errors in fields to continue");
  }
}


function AppendMessage(text, parent, newId) {
  var div = parent;
  var h6 = document.createElement('h6');
  h6.id = newId;
  var textNode = document.createTextNode(text);
  h6.appendChild(textNode);
  div.appendChild(h6);
}
function DeleteMessage(parent, idInvalid){
  element = document.getElementById(idInvalid);
  element.parentNode.removeChild(element);
}

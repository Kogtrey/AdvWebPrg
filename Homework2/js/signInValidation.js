

function validateForm(id){
  var input;
  var letters = /^[A-Za-z]+$/;
  var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  var PassRegex = /^[a-zA-Z]\w{3,14}$/;
  switch (id) {
    case "FirstNameIn":
      idInvalid = "first-name-invalid";
      input = document.getElementById(id);
      var parent = document.getElementById('first-name');
      if(!letters.test(input.value)){
          AppendMessage("Spaces or numbers detected in name", parent, idInvalid);
          colorInvalid(input);
      }else{
        colorValid(input);
        DeleteMessage(parent,idInvalid);
      }
      break;
    case "LastNameIn":
    idInvalid = "last-name-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('last-name');
    if(!letters.test(input.value)){
      colorInvalid(input);
      AppendMessage("Spaces or numbers detected in name", parent, idInvalid);
    }else{
      colorValid(input);
      DeleteMessage(parent,idInvalid);
    }
    break;
    case "EmailIn":
    idInvalid = "email-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('email-info');
    if(!email.test(input.value)){
      colorInvalid(input);
      AppendMessage("email is not recognizable", parent, idInvalid);
    }else{
      colorValid(input);
      DeleteMessage(parent,idInvalid);
    }
    break;
    case "PasswordIn":
    idInvalid = "password-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('password');
    if(!PassRegex.test(input.value)){
      colorInvalid(input);
      AppendMessage("Password must have between 4 and 15 characters,start with a letter, and contain no spaces", parent, idInvalid);

    }else{
      colorValid(input);
      DeleteMessage(parent,idInvalid);
    }
    break;
    case "ConfirmPasswordIn":
    idInvalid = "confirm-password-invalid";
    input = document.getElementById(id);
    var parent = document.getElementById('confirm-password');
    if(input.value != document.getElementById('PasswordIn').value || input.value == ''){
      colorInvalid(input);
      AppendMessage("Passwords dont match", parent, idInvalid);
    }else{
      colorValid(input);
      DeleteMessage(parent,idInvalid);
    }
    break;
    default:

  }
}

function validatePage() {
  var inputs = document.getElementsByClassName('error');
  if(inputs == undefined){
    return true;
  }
  alert("Fix Errors to Continue");
  return false;
}


function AppendMessage(text, parent, newId) {
  if(document.getElementById(newId)==null){
    var div = parent;
    var h6 = document.createElement('h6');
    h6.classlist.add("error");
    h6.id = newId;
    var textNode = document.createTextNode(text);
    h6.appendChild(textNode);
    div.appendChild(h6);

  }
}
function DeleteMessage(parent, idInvalid){
  if(document.getElementById(idInvalid) != null){
    element = document.getElementById(idInvalid);
    element.parentNode.removeChild(element);

  }
}

function colorInvalid(element) {
  element.style.background = '#ff0000';
  element.style.color = "#ffffff";
  element.style.borderColor = '#000';
}

function colorValid(element){
  element.style.color = '#000';
  element.style.background = "#ffffff";
  element.style.borderColor = "#00ff00";
}

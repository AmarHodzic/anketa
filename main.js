document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

});

var v1,v2,v3,v4 = 0 ;

var registerBtn = document.getElementById("register-btn");

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

function allow(){
  if(v1 == 1 & v2 == 1 & v3 == 1 & v4 == 1){
    registerBtn.classList.remove("disabled")
  }
  else if(v1 == 0 & v2 == 0 & v3 == 0 & v4 == 0){
    registerBtn.classList.add("disabled");
  }
}

myInput.onkeypress = function(){
  allow();
}

myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
      v1 = 1;
      allow();
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
      v1 = 0;
      allow();
      registerBtn.classList.add("disabled");
    }
    
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
      v2 = 1;
      allow();
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      v2 = 0;
      allow();
      registerBtn.classList.add("disabled");
    }
    
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
      v3 = 1;
      allow();
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
      v3 = 0;
      allow();
      registerBtn.classList.add("disabled");
    }
  }

myInputEmail = document.getElementById("emailCreate")
validEmail = document.getElementById("validEmail") 

myInputEmail.onfocus = function() {
    document.getElementById("messageEmail").style.display = "block";
}

myInputEmail.onblur = function() {
    document.getElementById("messageEmail").style.display = "none";
}


myInputEmail.onkeypress = function(){
  allow();
}

myInputEmail.onkeyup = function() {

    const formaEmaila = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(formaEmaila.test(String(myInputEmail.value).toLowerCase())){
        console.log("hehe")
        validEmail.classList.remove("invalid");
        validEmail.classList.add("valid");
        v4 = 1;
        allow();
    } else {
        console.log("tu je")
        validEmail.classList.remove("valid");
        validEmail.classList.add("invalid");
        v4 = 0;
        allow();
        registerBtn.classList.add("disabled");
    }
} 
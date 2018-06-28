/*  document.getElementById('login').addEventListener('click', function () {
    var provider = new firebase.auth.GoogleAuthProvider();


   firebase.auth().signInWithPopup(provider)
    .then(function (result) {})
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.username;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

});


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location="views/main.html";

      // User is signed in.
    } else {
      console.log('logeado');

      // No user is signed in.
    }
  });*/

  var invocador=document.getElementById("username");
  var invocadorPassword=document.getElementById("password");
  var btnLogin=document.getElementById("login");
  var btnSignUp=document.getElementById("signup");
  var newInvocador=document.getElementById("new-user-name");
  var newPassword=document.getElementById("password-up");
  // evento para login
  btnLogin.addEventListener("click", e => {
      var invocadorValue=invocador.value;
      var passwordValue=password.value;
      var auth=firebase.auth();
      var promise=auth.signInWithEmailAndPassword(invocador,invocadorPassword);
      promise.catch( e => alert(e.message));
  });
  // Evento para sing up
  btnSignUp.addEventListener("click", e => {
    console.log("hola");
    var invocadorValue=newInvocador.value;
    var passwordValue=newPassword.value;
    var auth=firebase.auth();
    var promise=auth.createUserWithEmailAndPassword(invocadorValue,passwordValue);
    promise.catch( e => alert(e.message));
  });
 // redireccionando despues de log in
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log("logeado");
            //location.href="main.html"
        }else{
            console.log("not loged in");
        }
    });


      //INICIALIZAR JQUERY CUANDO EL DOM SE ENCUENTRE CARGADO

$(document).ready(function () {

      //this function hide the splash and reapper again the image in a soft fade in
      $(function(){
        $("#copy").hide();
        $(".splash").hide();
        $(".splash").fadeIn(2000)

        });
      //this function take the time the image is showing and fade it out , then makes appear the intro
       $(function(){
           setTimeout(function() {
             $(".splash").fadeOut(2000, function() {
             $("#copy").show();
          });
         }, 3000);
        });

});

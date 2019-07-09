// function changeColor(){
// document.getElementById("myPara").style.color="red";}

function underline(){
// document.getElementById("myPara").style.textDecoration="Underline";
if (document.getElementById("myPara").style.textDecoration=="")
{document.getElementById("myPara").style.textDecoration="Underline"} else
{document.getElementById("myPara").style.textDecoration="";}

}

function bold(){
    // document.getElementById("myPara").style.fontWeight="Bold";
if (document.getElementById("myPara").style.fontWeight=="")
{document.getElementById("myPara").style.fontWeight="bold"} else
{document.getElementById("myPara").style.fontWeight="";}
}

function italic(){
    // document.getElementById("myPara").style.fontStyle="italic";
if (document.getElementById("myPara").style.fontStyle=="") document.getElementById("myPara").style.fontStyle="italic";
else {document.getElementById("myPara").style.fontStyle="";}
}



function change_size(){
    document.getElementById("myPara").style.fontSize=size.value;
}

function change_font(){
    document.getElementById("myPara").style.fontFamily=font.value;
}

function change_color(){
    document.getElementById("myPara").style.color=color.value;

}

var firebaseConfig = {
    apiKey: "AIzaSyAkw9UZmA6c68B67N_YB1RH1JtF5XQAkQE",
    authDomain: "myproject-b3540.firebaseapp.com",
    databaseURL: "https://myproject-b3540.firebaseio.com",
    projectId: "myproject-b3540",
    storageBucket: "",
    messagingSenderId: "414491353564",
    appId: "1:414491353564:web:01e248bde6bc2e47"
  };
// jQuery is written in your “.js” file.
// *************************************************DATABASE****************************************
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAkw9UZmA6c68B67N_YB1RH1JtF5XQAkQE",
    authDomain: "myproject-b3540.firebaseapp.com",
    databaseURL: "https://myproject-b3540.firebaseio.com",
    projectId: "myproject-b3540",
    storageBucket: "myproject-b3540.appspot.com",
    messagingSenderId: "414491353564",
    appId: "1:414491353564:web:01e248bde6bc2e47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('myprojct'); //Setting the name of database 

function submitForm(e){
    e.preventDefault();
    // Get Values 
var name = document.getElementById('name').value;
var email = document.getElementById ('email').value; 
var password = document.getElementById('password').value; 
var message= document.getElementById('message').value; 
saveMessage(name,email,password,message); //sending data to our database
}

//Sending the data to Firebase
document.getElementById('contactForm').addEventListener('submit', submitForm);
//Save message to Firebase
function saveMessage(name, email,password,message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
    name: name,
    email: email, 
    password: password, 
    message: message
});
}
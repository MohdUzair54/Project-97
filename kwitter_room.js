var firebaseConfig = {
    apiKey: "AIzaSyDChpkrR3FfRsQjl1oMfkQKp7RFog8kNyM",
    authDomain: "kwitter-app-591ed.firebaseapp.com",
    databaseURL: "https://kwitter-app-591ed-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-591ed",
    storageBucket: "kwitter-app-591ed.appspot.com",
    messagingSenderId: "157542342362",
    appId: "1:157542342362:web:1595e8c9157c9d62c08fe3",
    measurementId: "G-1Z3QX9E8WS"
  };
  
  // Initialize Firebase
  firebase. initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";          
}


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
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
  firebase. initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
// message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
// like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
// span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
//  row = name_with_tag + message_with_tag +like_button + span_with_tag;

row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";       


document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

function updateLike(message_id){
    console.log("clickonlikebutton"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}


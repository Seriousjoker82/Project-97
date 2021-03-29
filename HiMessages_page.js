//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC1oiIPoR__HBoRepjhHoXXUvSgdp--xfU",
      authDomain: "kwitter-project-ae5a7.firebaseapp.com",
      databaseURL: "https://kwitter-project-ae5a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-ae5a7",
      storageBucket: "kwitter-project-ae5a7.appspot.com",
      messagingSenderId: "970498315786",
      appId: "1:970498315786:web:bb95e863f39488cb3531f3",
      measurementId: "G-ZJCRN4NGCP"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name  = message_data['name']
like = message_data['like']
dislike = message_data['dislike']
message = message_data['message']
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src ='tick.png'></h4>"
message_with_tag = "<h4 class = message_h4>" +message + "</h4>"
like_button = "<button class = 'btn btn-warning' id=" + firebase_message_id + " value =" + like + " onclick = 'updateLike(this.id)'>"
span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'>Like: " +like + "</span></button>&nbsp;&nbsp;&nbsp"
dislike_button = "<button class = 'btn btn-warning' id=" + firebase_message_id + " value =" + dislike + " onclick = 'updatedisLike(this.id)'>"
span_with_tag_2 = "<span class ='glyphicon glyphicon-thumbs-down'>Dislike: " +dislike + "</span></button><hr>"
row = name_with_tag + message_with_tag + like_button + span_with_tag + dislike_button + span_with_tag_2;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0,
           dislike:0
      });
      document.getElementById("msg").value = ""
}
function updateLike(message_id)
{
console.log("clicked on like button - " + message_id)
button_id = message_id
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1 
console.log(updated_likes);


firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
});
}

function updatedisLike(message_id)
{
console.log("clicked on dislike button - " + message_id)
button_id_2 = message_id
dislikes = document.getElementById(button_id_2).value;
updated_dislikes = Number(dislikes) + 1 
console.log(updated_dislikes);


firebase.database().ref(room_name).child(message_id).update({
      dislike: updated_dislikes
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("HiMessages.html")
      }
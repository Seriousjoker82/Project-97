
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

    username = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addRoom(){
          Room_name = document.getElementById("room_name").value; 
            firebase.database().ref("/").child(Room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name", Room_name);

            window.location = "HiMessages_page.html"
    }



    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names + "</div><hr>"
      document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "HiMessages_page.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "HiMessages.html"
}
